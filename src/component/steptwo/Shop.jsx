import React, { useState, useEffect } from 'react';
import NavigateBtn from '../shared/NavigateBtn';
import { checkEmail, selectItem } from '../common';

import '../../media/css/steptwo/Shop.css';

function Shop(props) {
  const { payment } = props;
  const [next, setNext] = useState(false);
  const [shop, setShop] = useState('選擇');
  const [shopErr, setShopErr] = useState('');
  const [shopValidet, setShopValidate] = useState(false);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValidate, setEmailValidate] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const shopData = [
    {
      index: 1,
      name: '統一超商 7-11'
    },
    {
      index: 2,
      name: '全家便利商店'
    },
    {
      index: 3,
      name: '萊爾富'
    },
    {
      index: 4,
      name: 'OK便利商店'
    }
  ];
  const getData = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '') {
      setEmailValidate(false);
      setEmailErr('信箱必填');
    } else if (!checkEmail(value)) {
      setEmailValidate(false);
      setEmailErr('信箱格式錯誤');
    } else {
      setEmailValidate(true);
    }
  }
  const getShop = (e, type) => {
    setShop(e.target.textContent);
    if (e.target.textContent === '選擇') {
      setShopErr('請選擇付款超商');
      setShopValidate(false);
    } else {
      setShopValidate(true);
    }
  }
  useEffect(() => {
    document.querySelector('.step-two').addEventListener('click', function (e) {
      const classArray = Array.from(e.target.classList);
      const bankIndex = classArray.findIndex(e => e === 'shoptTitle');
      if (bankIndex === -1 && classArray.length > 0) {
        document.querySelector('.shopInfo').classList.remove('active');
      }
      if (classArray.length === 0) {
        const Index = Array.from(e.target.parentNode.parentNode.classList).findIndex(e => {
          return e === 'shopInfo';
        });
        if (Index === -1) {
          const dateInfoArray = Array.from(document.querySelectorAll('.shopInfo'));
          dateInfoArray.forEach(e => {
            e.classList.remove('active');
          })
        }
      }
    }, false);
    if (shopValidet && emailValidate && doubleCheck) {
      setNext(true);
    } else {
      setNext(false);
    }
  });
  return (
    <>
      <form className="user-data">
        <div className="data-info shop">
          <label className="item">
            <p>付款超商：</p>
            <div className="shopInfo" onClick={e => selectItem(e)}>
              <span className="shoptTitle">{shop}</span>
              <ul className="shopName">
                {shopData.map(e => {
                  return (
                    <li key={e.index} onClick={e => getShop(e)}>{e.name}</li>
                  );
                })}
              </ul>
            </div>
            {shopValidet ? null : <span className="bank require">{shopErr}</span>}
          </label>
        </div>
        <div className="data-info email">
          <label className="item" htmlFor="email">
            <p>填寫付款人信箱：</p>
            <input type="email" name="email" value={email} onChange={e => getData(e)} />
            {emailValidate ? null : <span className="email require">{emailErr}</span>}
          </label>
        </div>
        <div className="data-info double-check">
          <div className="col">
            <input type="checkbox" id="double-check" onChange={() => setDoubleCheck(!doubleCheck)} />
          </div>
          <div className="col">
            <label htmlFor="double-check" className="double-check-label">請再次確認「訂單資訊」與「付款資訊」，付款完成後將發送通知信至您的 E-mail 信箱</label>
            <span>第三方支付金流平台服務條款</span>
          </div>
        </div>
      </form>
      <div className="btn-area">
        <NavigateBtn text="回上一步" className="btn back-step" href="/step-one" disable={true} />
        <NavigateBtn text="下一步" className="btn next" href="/step-three" disable={next} shopName={shop} paymentInfo={payment} page={3} />
      </div>
    </>
  );
}

export default Shop;
