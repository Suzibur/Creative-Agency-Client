import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';
import Service from './Components/Home/Service/Service';
import OrderCart from './Components/Dashboard/OrderCart/OrderCart';
import Review from './Components/Dashboard/Review/Review';
import AddService from './Components/Dashboard/AddService/AddService';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import AllOrder from './Components/Dashboard/AllOrder/AllOrder';

function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <PrivateRoute path="/dashboard">
          <OrderCart></OrderCart>
        </PrivateRoute>
        <PrivateRoute path="/order/:category">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/order">
          <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/service">
          <OrderCart></OrderCart>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/service-list">
          <AllOrder></AllOrder>
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/addAdmin">
          <AddAdmin></AddAdmin>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
