
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../components/Common/history';
import LandingPage from './LandingPage/LandingPage';
import '../styles/css/index.css';

import '../styles/css/animate.css';
import '../styles/css/imagehover.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import 'react-accessible-accordion/dist/fancy-example.css';
import 'loaders.css';
import WhatCelebrate from './WhatCelebrate/WhatCelebrate';
import ConnectWallet from './ConnectWallet/ConnectWallet';
import MyAccount from './MyAccount/MyAccount';
import Product from './Product/Product';

const App = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/tokenomics" exact component={WhatCelebrate} />
        <Route path="/connect-wallet" exact component={ConnectWallet} />
        <Route path="/my-account" exact component={MyAccount} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
