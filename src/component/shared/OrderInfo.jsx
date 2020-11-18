import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavigateBtn from './NavigateBtn';

import '../../media/css/Shared/OrderInfo.css';

function OrderInfo(props) {
  const { step } = props;
  const [deviceWidth, setDeivceWidth] = useState(window.innerWidth);
  const openOrderInfo = () => {
    const order = document.querySelector('.order-info-area');
    order.classList.toggle('open');
  }
  useEffect(() => {
    window.addEventListener('resize', function () {
      setDeivceWidth(window.innerWidth);
    }, false)
  })
  return (
    <div className={step !== 3 ? "order-info-area" : "order-info-area finish"}>
      {step !== 3 ? null : <span className="finish-title">Finish</span>}
      <div className="item title" onClick={() => openOrderInfo()}>
        <h2>訂單資訊</h2>
      </div>
      <div className="item content">
        <p>商品名稱</p>
        <p>Iphone XR手機殼 * 1</p>
      </div>
      <div className="item content">
        <p>訂單編號</p>
        <p>17485739</p>
      </div>
      <div className="item content">
        <p>訂單金額</p>
        <p>NT $ 600</p>
      </div>
      {(deviceWidth > 768 && step !== 3) ? <NavigateBtn text="返回商店" className="btn back-shop" href="/step-one" disable={true} /> : null}
    </div>
  );
}

OrderInfo.propTypes = {
  step: PropTypes.number,
};

export default OrderInfo;
