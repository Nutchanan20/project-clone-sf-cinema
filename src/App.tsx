import React from 'react';
import './App.css';
import TopHeader from './components/top-header';
import Navbar from './components/navbar';
import Home from './pages/home';


export default function App() {
  return (
  <div>
  <TopHeader></TopHeader>
  <Navbar></Navbar>
  <Home></Home>
  </div>
)
}


