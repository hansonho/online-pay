import React, { useState, useEffect } from 'react';
import NavigateBtn from '../shared/NavigateBtn';
import { checkEmail, selectItem } from '../common';

import master from '../../media/img/mastercard.svg';
import jcb from '../../media/img/jcb.svg';
import visa from '../../media/img/visa.svg';
import backNum from '../../media/img/back-three.svg';

import '../../media/css/steptwo/CreditCard.css';

function CreditCard(props) {
  const { payment } = props;
  const [next, setNext] = useState(false);
  const [type, setType] = useState('');
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [year, setYear] = useState('選擇');
  const [month, setMonth] = useState('選擇');
  const [dateErr, setDateErr] = useState('');
  const [dateValidet, setDateValidate] = useState(true);
  const [cardNumber1, setCarNumber1] = useState('');
  const [cardNumber2, setCarNumber2] = useState('');
  const [cardNumber3, setCarNumber3] = useState('');
  const [cardNumber4, setCarNumber4] = useState('');
  const [cardNumberValidate, setCardNumberValidate] = useState(true);
  const [backThree, setBackThree] = useState('');
  const [backThreeValidate, setBackThreeValidate] = useState(true);
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [emailValidate, setEmailValidate] = useState(true);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [payInfo, setPayInfo] = useState();
  const yearArray = [];
  const monthArray = [];
  const creditCardImg = [
    {
      src: visa,
      alt: "Visa",
      index: 1,
    },
    {
      src: master,
      alt: "Master Card",
      index: 2,
    },
    {
      src: jcb,
      alt: "JCB",
      index: 3,
    }
  ];
  const yearNow = new Date().getFullYear();
  for (let i = 0; i <= 5; i += 1) {
    yearArray.push({
      year: yearNow + i,
      index: i + 1,
    });
  }
  for (let i = 0; i < 12; i += 1) {
    monthArray.push({
      month: i + 1 + '月',
      index: i + 1,
    });
  }
  const cardType = e => {
    switch (parseInt(e.split('')[0])) {
      case 1:
      case 2:
      case 3:
        if (parseInt(e) === 1800) {
          return 'JCB';
        } else if (parseInt(e) === 2131) {
          return 'JCB';
        } else {
          if (parseInt(e) / 10 >= 300 && parseInt(e) / 10 <= 399) {
            return 'JCB';
          }
        }
        break;
      case 4:
        return 'Visa';
      case 5:
        return 'Master Card';
      default:
        break;
    }
  }
  const getData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardNumber1": {
        setType(cardType(value));
        setCarNumber1(value);
        if (value === '' || cardNumber2 === '' || cardNumber3 === '' || cardNumber4 === '') {
          setCardNumberValidate(false);
        } else {
          setCardNumberValidate(true);
        }
        break;
      }
      case "cardNumber2":
        setCarNumber2(value);
        if (value === '' || cardNumber1 === '' || cardNumber3 === '' || cardNumber4 === '') {
          setCardNumberValidate(false);
        } else {
          setCardNumberValidate(true);
        }
        break;
      case "cardNumber3":
        setCarNumber3(value);
        if (value === '' || cardNumber2 === '' || cardNumber1 === '' || cardNumber4 === '') {
          setCardNumberValidate(false);
        } else {
          setCardNumberValidate(true);
        }
        break;
      case "cardNumber4":
        setCarNumber4(value);
        if (value === '' || cardNumber2 === '' || cardNumber3 === '' || cardNumber1 === '') {
          setCardNumberValidate(false);
        } else {
          setCardNumberValidate(true);
        }
        break;
      case 'back-three-num':
        setBackThree(value);
        if (value === '') {
          setBackThreeValidate(false);
        } else {
          setBackThreeValidate(true);
        }
        break;
      case 'email':
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
        break;
    }
  }
  const getDate = (e, type) => {
    if (type === 'month') {
      setMonth(e.target.textContent);
      if (year === '選擇') {
        setDateErr('年份必填');
        setDateValidate(false);
      } else {
        setDateValidate(true);
      }
    } else {
      setYear(e.target.textContent);
      if (month === '選擇') {
        setDateErr('月份必填');
        setDateValidate(false);
      } else {
        setDateValidate(true);
      }
    }
  }
  useEffect(() => {
    window.addEventListener('resize', () => {
      setDeviceWidth(window.innerWidth);
    }, false)
    document.querySelector('.step-two').addEventListener('click', function (e) {
      const classArray = Array.from(e.target.classList);
      const yearIndex = classArray.findIndex(e => e === 'year');
      const monthIndex = classArray.findIndex(e => e === 'month');
      if (monthIndex === -1 && classArray.length > 0) {
        document.querySelector('.dateInfo-month').classList.remove('active');
      }
      if (yearIndex === -1 && classArray.length > 0) {
        document.querySelector('.dateInfo-year').classList.remove('active');
      }
      if (classArray.length === 0) {
        const Index = Array.from(e.target.parentNode.parentNode.classList).findIndex(e => {
          return e === 'dateInfo';
        });
        if (Index === -1) {
          const dateInfoArray = Array.from(document.querySelectorAll('.dateInfo'));
          dateInfoArray.forEach(e => {
            e.classList.remove('active');
          })
        }
      }
    }, false);

    if (doubleCheck && payInfo && cardNumberValidate && dateValidet && backThreeValidate && emailValidate) {
      setNext(true);
    } else {
      setNext(false);
    }
  })
  return (
    <>
      <form className="user-data">
        <div className="data-info credit-card-method">
          <label className="item" htmlFor="once">
            <input type="radio" id="once" data-payment="once" name="payment-method" onChange={(e) => setPayInfo(e.target.dataset.payment)} />
            <span>一次付款</span>
          </label>
          <label className="item" htmlFor="staging">
            <input type="radio" id="staging" data-payment="staging" name="payment-method" onChange={(e) => setPayInfo(e.target.dataset.payment)} />
            <span>分期付款</span>
          </label>
        </div>
        <div className="data-info credit-card-number">
          <label className="item">
            <p>信用卡號：</p>
            <input className="card-number" name="cardNumber1" type="text" maxLength="4" value={cardNumber1} onChange={e => getData(e)} />
            <hr />
            <input className="card-number" name="cardNumber2" type="text" maxLength="4" value={cardNumber2} onChange={e => getData(e)} />
            <hr />
            <input className="card-number" name="cardNumber3" type="text" maxLength="4" value={cardNumber3} onChange={e => getData(e)} />
            <hr />
            <input className="card-number" name="cardNumber4" type="text" maxLength="4" value={cardNumber4} onChange={e => getData(e)} />
            {deviceWidth > 768 ? creditCardImg.map(e => {
              if (e.alt === type) {
                return (
                  <img className="card-catogory active" key={e.index} src={e.src} alt={e.alt} />
                );
              }
              return (
                <img className="card-catogory" key={e.index} src={e.src} alt={e.alt} />
              );
            }) : null}
            {cardNumberValidate ? null : <span className="cardNumber require">信用卡號必填</span>}
          </label>
        </div>
        <div className="data-info validate-date">
          <label className="item">
            <p>有效月年：</p>
            <div className="dateInfo dateInfo-month" onClick={e => selectItem(e)}>
              <span className="month">{month}</span>
              <ul>
                {monthArray.map(e => {
                  return (
                    <li key={e.index} onClick={e => getDate(e, 'month')}>{e.month}</li>
                  );
                })}
              </ul>
            </div>
            <div className="dateInfo dateInfo-year" onClick={e => selectItem(e)}>
              <span className="year">{year}</span>
              <ul>
                {yearArray.map(e => {
                  return (
                    <li key={e.index} onClick={e => getDate(e, 'year')}>{e.year}</li>
                  );
                })}
              </ul>
            </div>
            <span>年</span>
            {dateValidet ? null : <span className="date require">{dateErr}</span>}
          </label>
        </div>
        <div className="data-info back-three-num">
          <label className="item" htmlFor="back-three-num">
            <p>背面末三碼：</p>
            <input name="back-three-num" type="text" maxLength={3} value={backThree} onChange={e => getData(e)} />
            <img src={backNum} alt="背後末三碼" />
            {backThreeValidate ? null : <span className="back-three require">背面末三碼必填</span>}
          </label>
        </div>
        <div className="data-info user-email">
          <label className="item" htmlFor="email">
            <p>填寫付款人信箱：</p>
            <input type="email" name="email" value={email} onChange={e => getData(e)} />
            {emailValidate ? null : <span className="email require">{emailErr}</span>}
          </label>
        </div>
        <div className="data-info double-check">
          <div className="col">
            <input type="checkbox" id="double-check" onChange={() => setDoubleCheck(true)} />
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

export default CreditCard;
