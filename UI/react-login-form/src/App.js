import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages2/Home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


import Product from './ProductComponent/Product'
import MyBid from './BidComponent/MyBid'
import Menu from './MenuComponent/Menu'
import Store from './Redux/Store'
import * as actions from './Redux/Action/ProductAction'
import ProductService from './Service/ProductService'
import ViewProducts from './ViewProducts/ViewProducts';


import Contact from './components/Pages2/Contact';
import About from './components/Pages2/About';
import SignUpForm from './components/pages/SignUpForm'
import SignInForm from './components/pages/SignInForm';
import home from './components/pages/home';

export default class App extends React.Component {


  componentDidMount()
  {
    ProductService.getProducts()
                    .then(response=>response.json())
                    .then(data=>{
                      console.log(data)
                      if(data.statusCode==200){
                        Store.dispatch({...actions.ACTION_LOAD_PRODUCTS,payload:{
                                    products : data.data
                                }})
                              }
                    })
  }


  render() {
    return (
      <>
      
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />

            <Route path='/About' component={About} />
            <Route path='Contact' component={Contact} />


            <Route path="/sign-up" component={SignUpForm} />
            <Route path="/sign-in" component={SignInForm} />
            <Route path="/home" component={home} />


          </Switch>

          <Route path="/" element={<Product/>}/>
        <Route path="/mybid" element={<MyBid/>}/>
        <Route path="/viewproducts" element={<ViewProducts/>}/>
        </Router>
      </>
    );
  }
}