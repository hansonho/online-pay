import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../shared/StepLayout';
import OrderInfo from '../shared/OrderInfo';
import Common from './Common';
import Shop from './Shop';

function Index() {
  const data = useLocation().state;
  if (data.paymentInfo === 'store') {
    return (
      <>
        <OrderInfo step={3} />
        <Layout step="step step-three" title="您的訂單已完成付款" page={3}>
          <Shop shopName={data.shopName} page={3} />
        </Layout>
      </>
    );
  }
  return (
    <>
      <OrderInfo step={3} />
      <Layout step="step step-three" title="您的訂單已完成付款" page={3}>
        <Common page={3} />
      </Layout>
    </>
  );
}

export default Index;
