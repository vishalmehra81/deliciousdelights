import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';

import OrderContainer from './OrderContainer';

const MainContainer = () => {

 

  

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/orders" component={OrderContainer}/>
        

      </Switch>


      </Fragment>
      </Router>

      
    )
  }


export default MainContainer;