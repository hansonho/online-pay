import React, { useState, useEffect } from 'react';
import NavigateBtn from './NavigateBtn';

import '../../media/css/Shared/Footer.css';

function Footer(props) {
  const { page } = props;
  const [deviceWidth, setDeivceWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', function () {
      setDeivceWidth(window.innerWidth);
    }, false)
  })
  return (
    <footer className="footer">
      {(deviceWidth < 768 && page !== 3) ? <NavigateBtn text="返回商店" className="btn back-shop" href="/step-one" /> : null}
    </footer>
  );
}

export default Footer;
