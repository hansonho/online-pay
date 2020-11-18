import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../shared/StepLayout';
import OrderInfo from '../shared/OrderInfo';
import CreditCard from './CreditCard';
import WebAtm from './WebAtm';
import Shop from './Shop';

function Index() {
  const data = useLocation().state;
  switch (data.paymentInfo) {
    case 'credit-card':
      return (
        <>
          <OrderInfo />
          <Layout step="step step-two" title="STEP2. 填寫付款資訊" page={2} paymentType="信用卡/金融卡">
            <CreditCard payment={data.paymentInfo} />
          </Layout>
        </>
      );
    case 'union-pay':
      return (
        <>
        </>
      );
    case 'store':
      return (
        <>
          <OrderInfo />
          <Layout step="step step-two" title="STEP2. 填寫付款資訊" page={2} paymentType="超商付款">
            <Shop payment={data.paymentInfo} />
          </Layout>
        </>
      );
    case 'web-atm':
      return (
        <>
          <OrderInfo />
          <Layout step="step step-two" title="STEP2. 填寫付款資訊" page={2} paymentType="Web ATM">
            <WebAtm payment={data.paymentInfo} />
          </Layout>
        </>
      );
    default:
      return (
        <>
        </>
      );
  }
}

export default Index;
