import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../media/css/Shared/NavigateBtn.css';

function NavigateBtn(props) {
  const { text, className, href, paymentInfo, disable, shopName, page } = props;
  if (disable) {
    return (
      <Link to={{
        pathname: href,
        state: {
          paymentInfo: paymentInfo,
          shopName: shopName,
          page: page
        },
      }} className={className}>{text}</Link>
    );
  }
  return (
    <span className={`${className} disable`}>{text}</span>
  );
}

NavigateBtn.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  paymentInfo: PropTypes.string,
  disable: PropTypes.bool,
  shopName: PropTypes.string,
  page: PropTypes.number,
}

export default NavigateBtn;