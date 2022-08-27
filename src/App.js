import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="main">
  
      <Home></Home>
      <Navbar></Navbar>
    <Routes>
          <Route path="/about" element={<></>} /> 
          <Route path="/soon" element={<></>} >
          </Route>
          <Route path="/orders" element={<></>} >
          </Route>
          <Route path="/price" element={<></>} >
          </Route>
          <Route path="/payment" element={<></>} >
          </Route>
          <Route path="/transaction" element={<></>} >
          </Route>
        </Routes>
    </div>
  );
}

export default App;
