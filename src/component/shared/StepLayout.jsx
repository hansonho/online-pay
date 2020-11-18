import React from 'react';
import PropTypes from 'prop-types';
import StepShow from './StepShow';

import '../../media/css/Shared/StepLayout.css';

function StepLayout(props) {
  const { step, title, children, page, paymentType } = props;
  return (
    <>
      <div className={step}>
        <StepShow page={page} />
        <div className="step-content">
          <div className="item title">
            <h1 data-small={paymentType ? paymentType : null}>{title}</h1>
          </div>
          {paymentType ?
            <div className="small-title">
              <span>{paymentType}</span>
            </div> : null
          }
          {children}
        </div>
      </div>
    </>
  );
}

StepLayout.propTypes = {
  step: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
  page: PropTypes.number,
  paymentType: PropTypes.string
};

export default StepLayout;

