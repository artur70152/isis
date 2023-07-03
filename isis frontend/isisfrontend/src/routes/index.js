import {Routes,Route} from 'react-router-dom';
import React from 'react';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Tela2 from '../pages/tela2/index';
import RouteWrapper from './route';
export default function Routesa(){
    return (
        <Routes >
     <Route element={<RouteWrapper/>} >
            <Route path="/" element={<Signin/>} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<RouteWrapper isPrivate />}>
            <Route path="/tela2" element={<Tela2 />} />
            
          </Route> 
        </Routes>
      );
}