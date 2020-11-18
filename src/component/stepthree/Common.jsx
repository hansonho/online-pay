import React from 'react';
import NavigateBtn from '../shared/NavigateBtn';

import finish from '../../media/img/finish.svg';
import '../../media/css/stepthree/Common.css';

function Common() {
  return (
    <>
      <div className="finish-img">
        <img src={finish} alt="finish" />
      </div>
      <div className="finish-detail">
        <p>稍後將寄送訂單詳細資訊至您的E-mail</p>
      </div>
      <div className="btn-area">
        <NavigateBtn text="回首頁" className="btn back-shop" href="/step-one" disable={true} />
      </div>
    </>
  );
}

export default Common;
