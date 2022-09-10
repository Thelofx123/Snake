import * as React from 'react';
import '../App.css';
import logo from '../img/logo.png'
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
const Navbar = () => {

  
  return (
  
    <div className='navbar'> 
    <div className='sidebar'>
    <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} >
        <ul className="dropdown">
              <a><Link to="/">Бидний тухай</Link></a>
                   <div className='dropdown-content'>
                
                        <a><Link to="/team">Удирдлагын баг</Link></a>
                        <a><Link to="/greeting">захирлын мэндчилгээ</Link></a>
                    </div>
            </ul>
          <a><Link to="/service">Үйлчилгээ</Link></a>
          <a><Link to="/allProject">Хэрэгжүүлсэн төслүүд</Link></a>
          <a><Link to="/information">Мэдээ, Мэдээлэл</Link></a>
          <a><Link to="/hr">Хүний нөөц</Link></a>
          <a><Link to="/price">Холбоо барих</Link></a>
  
      </Menu>
      </div>
    <div className='half'>
      <div className='secondHalf'>
      <Link to="/">
      <img className='zurag2' src={logo}/>
      </Link>
          
              {/* <div className='subSecondHalf'>
              <p className='nameTop'>LBH</p>
              <p className='logoName'>EXCELLENT PERFORMANCE</p>
              </div> */}

      </div>
  
      

        <div className='yum2'>
        <ul className="dropdown">
              <li><Link to="/">Бидний тухай</Link></li>
                   <div className='dropdown-content'>
                
                        <li><Link to="/team">Удирдлагын баг</Link></li>
                        <li><Link to="/greeting">захирлын мэндчилгээ</Link></li>
                    </div>
            </ul>
          <li><Link to="/service">Үйлчилгээ</Link></li>
          <li><Link to="/allProject">Хэрэгжүүлсэн төслүүд</Link></li>
          <li><Link to="/information">Мэдээ, Мэдээлэл</Link></li>
          <li><Link to="/hr">Хүний нөөц</Link></li>
          <li><Link to="/price">Холбоо барих</Link></li>
        
            
        
           
          
        </div>
        <div className='test'>
             <li>En</li>
              <li>Mn</li>
        </div>
    </div>
 
    </div>
   
   
  );
};
export default Navbar;