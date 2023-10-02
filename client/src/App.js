
import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/partials/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  json
} from "react-router-dom";

function App() {
  
  return(
<Router>
  <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>}/>
            
        </Routes>
    </Router>
  );
}

export default App;
