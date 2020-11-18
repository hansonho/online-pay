import React, { useState } from 'react';
import Layout from '../shared/StepLayout';
import OrderInfo from '../shared/OrderInfo';
import NavigateBtn from '../shared/NavigateBtn';
import ToolTips from '../shared/Tooltips';

import CreditCard from '../../media/img/credit-card.svg';
import UnionPay from '../../media/img/unionpay.svg';
import Shop from '../../media/img/shop.svg';
import WebATN from '../../media/img/web-atm.svg';
import ATM from '../../media/img/atm.svg';

import '../../media/css/stepone/index.css';

function Index() {
  const [payment, setPayment] = useState('');
  const [next, setNext] = useState(false);
  return (
    <>
      <OrderInfo />
      <Layout step="step step-one" title="STEP1. 選擇付款方式" page={1}>
        <>
          <div className="item content">
            <ul>
              <input className="payment-info" type="radio" name="payment-info" id="credir-card" onChange={e => setNext(true)} />
              <label htmlFor="credir-card" onClick={() => setPayment('credit-card')}>
                <li>
                  <img src={CreditCard} alt="信用卡/金融卡" />
                  <span className="payment">信用卡/金融卡</span>
                  <ToolTips />
                </li>
              </label>
              <input className="payment-info" type="radio" name="payment-info" id="union-pay" onChange={e => setNext(true)} />
              <label htmlFor="union-pay" onClick={() => setPayment('union-pay')}>
                <li>
                  <img src={UnionPay} alt="銀聯卡" />
                  <span className="payment">銀聯卡</span>
                  <ToolTips />
                </li>
              </label>

              <input className="payment-info" type="radio" name="payment-info" id="store" onChange={e => setNext(true)} />
              <label htmlFor="store" onClick={() => setPayment('store')}>
                <li>
                  <img src={Shop} alt="超商" />
                  <span className="payment">超商付款</span>
                  <ToolTips />
                </li>
              </label>

              <input className="payment-info" type="radio" name="payment-info" id="web-atm" onChange={e => setNext(true)} />
              <label htmlFor="web-atm" onClick={() => setPayment('web-atm')}><li>
                <img src={WebATN} alt="Web ATM" />
                <span className="payment">Web ATM</span>
                <ToolTips />
              </li></label>

              <input className="payment-info" type="radio" name="payment-info" id="atm" onChange={e => setNext(true)} />
              <label htmlFor="atm" onClick={() => setPayment('atm')}>
                <li>
                  <img src={ATM} alt="ATM轉帳" />
                  <span className="payment">ATM轉帳</span>
                  <ToolTips />
                </li>
              </label>

            </ul>
          </div>
          <div className="btn-area">
            <NavigateBtn text="下一步" className="btn next" href="/step-two" paymentInfo={payment} disable={next} page={2} />
          </div>
        </>
      </Layout>
    </>
  );
}

export default Index;