import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from "react";
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
import ResponsiveAppBar from './component/tes';
import Newscomp from './component/newsComp';
import Project from './component/projects';
import ViewProject from './component/viewProject';
import ProjectComp from './component/projectComp';
import { motion, AnimatePresence } from "framer-motion"
import ScrollToTop from './component/scrollToTop';
import Contact from './component/contactus';
import { createTheme, ThemeProvider } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  return (

    <ThemeProvider theme={theme}> 
      
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      {loading ? <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div> : 
      <div className="main">
      <Navbar></Navbar>
      <AnimatePresence>
      <ScrollToTop>
      <TransitionGroup>
            <CSSTransition
            
            timeout={450}
            classNames='fade'
            >
    <Routes onUpdate={() => window.scrollTo(0)}>
           
                 <Route path="/" element={<Home></Home>} /> 
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
           <Route path="/project" element={<ViewProject></ViewProject>} >
          </Route>
          <Route path="/allProject" element={<ProjectComp></ProjectComp>} >
          </Route>
          <Route path="/contactUs" element={<Contact></Contact>} />
       
        </Routes>
        </CSSTransition>
          </TransitionGroup>
        </ScrollToTop>
        </AnimatePresence>
        <Footer></Footer> 
    </div>
        }
  
    </ThemeProvider>
 
  );
}

export default App;
