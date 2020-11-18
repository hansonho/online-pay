import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import StepOne from './stepone/Index';
import StepTwo from './steptwo/Index';
import StepThree from './stepthree/Index';
import Footer from './shared/Footer';

import '../media/css/common.css';

function App() {
  const data = useLocation().state;
  return (
    <div className="container">
      <Switch>
        <Route path="/step-one">
          <StepOne />
        </Route>
        <Route path="/step-two">
          <StepTwo />
        </Route>
        <Route path="/step-three">
          <StepThree />
        </Route>
        <Route path="/">
          <StepOne />
        </Route>
      </Switch>
      <Footer page={data ? data.page : null} />
    </div>
  );
}

export default App;
