import React from 'react';

import './App.css';
import Login from './pages/login'

import {Routes,Route} from 'react-router-dom'
import Newpage from './pages/newpage'
import { BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Setting from './pages/setting'
import Contactus from './pages/contactus'
import Form from './pages/form'


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path = '/newpage' element={<Newpage/>}/>
      <Route path = '/home' element={<Home/>}/>
      <Route path = '/setting' element={<Setting/>}/>
      <Route path = '/contactus' element={<Contactus/>}/>
      <Route path = '/form' element={<Form/>}/>
      
     
     

     </Routes>
     </BrowserRouter>

      
      
    </div>
  );
}

export default App;
