import React, { useState, useEffect } from 'react';
import NavigateBtn from '../shared/NavigateBtn';
import { checkEmail, selectItem } from '../common';

import atmCode from '../../media/data/ATMCode.json';

import '../../media/css/steptwo/WebAtm.css';

function WebAtm(props) {
  const { payment } = props;
  const [next, setNext] = useState(false);
  const [bank, setBank] = useState('選擇');
  const [bankErr, setBankErr] = useState('');
  const [bankValidet, setBankValidate] = useState(true);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValidate, setEmailValidate] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);

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
  const getBank = (e, type) => {
    setBank(e.target.textContent);
    if (e.target.textContent === '選擇') {
      setBankErr('請選擇銀行');
      setBankValidate(false);
    } else {
      setBankValidate(true);
    }
  }
  useEffect(() => {
    document.querySelector('.step-two').addEventListener('click', function (e) {
      const classArray = Array.from(e.target.classList);
      const bankIndex = classArray.findIndex(e => e === 'bankTitle');
      if (bankIndex === -1 && classArray.length > 0) {
        document.querySelector('.bankInfo').classList.remove('active');
      }
      if (classArray.length === 0) {
        const Index = Array.from(e.target.parentNode.parentNode.classList).findIndex(e => {
          return e === 'bankInfo';
        });
        if (Index === -1) {
          const dateInfoArray = Array.from(document.querySelectorAll('.bankInfo'));
          dateInfoArray.forEach(e => {
            e.classList.remove('active');
          })
        }
      }
    }, false);
    if (bank !== '選擇' && emailValidate && doubleCheck) {
      setNext(true);
    } else {
      setNext(false);
    }
  })
  return (
    <>
      <form className="user-data">
        <div className="data-info bank">
          <label className="item">
            <p>付款銀行：</p>
            <div className="bankInfo" onClick={e => selectItem(e)}>
              <span className="bankTitle">{bank}</span>
              <ul className="bankCode">
                {atmCode.map(e => {
                  return (
                    <li key={e.index} data-code={e.code} onClick={e => getBank(e)}>{`${e.code} ${e.name}`}</li>
                  );
                })}
              </ul>
            </div>
            {bankValidet ? null : <span className="bank require">{bankErr}</span>}
            <div className="tips">
              <ol>
                <li>請準備晶片經融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。</li>
                <li>持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程</li>
              </ol>
            </div>
          </label>
        </div>
        <div className="data-info email">
          <label className="item" htmlFor="email">
            <p>填寫付款人信箱：</p>
            <input type="email" name="email" value={email} onChange={e => getData(e)} />
            {(emailValidate && email !== '') ? null : <span className="email require">{emailErr}</span>}
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
        <NavigateBtn text="下一步" className="btn next" href="/step-three" disable={next} paymentInfo={payment} page={3} />
      </div>
    </>
  );
}

export default WebAtm;
