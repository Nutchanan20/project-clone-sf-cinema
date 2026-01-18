import React from 'react';
import TopHeader from './components/top-header';
import Navbar from './components/navbar';
import Home from './pages/home';


export default function App() {
  return (
  <div>
  <TopHeader></TopHeader>
  <Navbar></Navbar>
  <div className="bg-[#f5f7fb]">
  <Home></Home>
  </div>
  </div>
)
}


