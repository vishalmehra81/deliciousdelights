import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderList from '../components/orders/OrderList';
import Request from '../helpers/request';

class OrderContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: []
    }
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/orders')
    .then(data => this.setState({orders: data}))
  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
            {/* use render only when necessary to pass the props to component */}
            <Route render={() => {
              return<OrderList orders = {this.state.orders} />              
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

export default OrderContainer;
