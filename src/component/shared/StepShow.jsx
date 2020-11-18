import React, { useState, useEffect } from 'react';
import PropsType from 'prop-types';
import '../../media/css/Shared/StepShow.css';

function StepShow(props) {
  const { page } = props;
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  useEffect(() => {
    switch (page) {
      case 1:
        setPage1(true);
        break;
      case 2:
        setPage1(true);
        setPage2(true);
        break;
      default:
        setPage1(true);
        setPage2(true);
        setPage3(true);
        break;
    }
  }, [page])
  return (
    <div className="step-area">
      <ul className="item">
        <li className={page1 ? "active" : ""}>1</li>
        <li className={page2 ? "active" : ""}>2</li>
        <li className={page3 ? "active" : ""}>3</li>
      </ul>
    </div>
  );
}

StepShow.propTypes = {
  page: PropsType.number,
}

export default StepShow;
