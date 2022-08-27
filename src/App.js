import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from "react";
import Navbar from './component/navbar';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import ViewNews from './component/newsView';
import Home from './component/aboutus';
import Greetings from './component/general';
import Team from './component/team';
import Footer from './component/footer';
import Service from './component/service';
import Hr from './component/hr';
import Newscomp from './component/newsComp';

function App() {



  return (
    <div className="main">
      
      <Navbar></Navbar>
    <Routes>
          <Route path="/about" element={<Home></Home>} /> 
          <Route path="/news" element={<ViewNews></ViewNews>} /> 
          <Route path="/team" element={<Team></Team>} >
          </Route>
          <Route path="/service" element={<Service></Service>} >
          </Route>
          <Route path="/hr" element={<Hr></Hr>} >
          </Route>
          <Route path="/greeting" element={<Greetings></Greetings>} >
          </Route>
          <Route path="/information" element={<Newscomp></Newscomp>} >
          </Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
