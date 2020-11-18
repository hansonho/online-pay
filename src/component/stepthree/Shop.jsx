import React from 'react';
import NavigateBtn from '../shared/NavigateBtn';

import '../../media/css/stepthree/Shop.css';

function ConvertDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();;
  const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();;
  const secs = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();;
  return `${year}-${month}-${day} ${hours}:${mins}:${secs}`;
}

function Shop(props) {
  const { shopName } = props;
  const date = ConvertDate(new Date(new Date().setDate(new Date().getDate() + 7)));
  return (
    <>
      <div className="shop-finish finish-shop">
        <p>付款超商：</p>
        <p>{shopName}</p>
      </div>
      <div className="shop-finish finish-code">
        <p>付款代碼：</p>
        <p>HSD6DSK2349</p>
      </div>
      <div className="shop-finish finish-date">
        <p>付款期限：</p>
        <p>{date}</p>
      </div>
      <div className="shop-finish finish-tips">
        <p>* 請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢。</p>
      </div>
      <div className="btn-area">
        <NavigateBtn text="回首頁" className="btn back-shop" href="/step-one" disable={true} />
      </div>
    </>
  );
}

export default Shop;
