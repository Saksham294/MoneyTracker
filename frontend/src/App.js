import React,{useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import User from './components/User/User';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {loadUser} from './Actions/userActions'
import NTP from './components/NTP/NTP';
import MyTransactionsPage from './components/MyTransactionsPage/MyTransactionPage';
import UTP from './components/UpdateTransactionPage/UTP';
import SplitBill from './components/SplitBillPage/SplitBill';
import AboutUs from './components/AboutUs/AboutUs';
import {groupTransaction} from './Actions/transactionActions'
import axios from 'axios';
import { set } from 'date-fns';

function App() {

  const [photos,setPhotos]=useState([])

 

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser())
 
  },[dispatch])


  const {isAuthenticated} = useSelector(state => state.user)
  return (
    <div className="App">


  <Router>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/login' element={isAuthenticated?<User/>:<Login/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/register' element={isAuthenticated?<User/>:<Register/>}/>
      <Route path='/account' element={isAuthenticated?<User/>:<Login/>}></Route>
      <Route path='/newTransaction' element={isAuthenticated?<NTP/>:<Login/>}></Route>
      <Route path='/myTransactions' element={isAuthenticated?<MyTransactionsPage/>:<Login/>}></Route>
      <Route path='/updateTransaction/:id' element={isAuthenticated?<UTP/>:<Login/>}></Route>
      <Route path='/splitbill' element={isAuthenticated?<SplitBill/>:<Login/>}></Route>

    </Routes>
  </Router>
    </div>
  );
}

export default App;

// - The user interface should display the list of transactions and allow the user to filter the transactions by date and category.
// - The user interface should display the total amount spent and the budget remaining based on the transactions.
// - The application should have a simple user interface for creating, updating, and deleting transactions.
// - The application should also show who owes you or who you owe.