import * as React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import lbh from "../img/lbh.png"
import { slide as Menu } from 'react-burger-menu'
const Navbar = () => {

  
  return (
  
    <div className='navbar'> 
    <div className='sidebar'>
    <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} >
        <ul className="dropdown">
              <a><Link to="/soon">Бидний тухай</Link></a>
                   <div className='dropdown-content'>
                
                        <a><Link to="/team">Удирдлагын баг</Link></a>
                        <a><Link to="/greeting">захирлын мэндчилгээ</Link></a>
                    </div>
            </ul>
          <a><Link to="/service">Үйлчилгээ</Link></a>
          <a><Link to="/price">Хэрэгжүүлсэн төслүүд</Link></a>
          <a><Link to="/information">Мэдээ, Мэдээлэл</Link></a>
          <a><Link to="/hr">Хүний нөөц</Link></a>
          <a><Link to="/price">Холбоо барих</Link></a>
  
      </Menu>
      </div>
    <div className='half'>
      <div className='secondHalf'>
      <Link to="/about">
      <img className='zurag2' src="https://s3-alpha-sig.figma.com/img/100c/1d94/facd476ef9274493d9b72940a38f21dd?Expires=1662336000&Signature=CVCHT7ELaWHC2vLDUqSKTB3aLoMrxArKMy59fLztkNGQQxWcbuZ4IZOt9vPT5UQmz8Et3w8Cc9qjogBRSmM3glzmIYNSIKYUd~FRmlNeaBeh0O-h2TcLchcL~cG3m0v0tivVOvl93VeuK2Ys76ECAtfRsQ7Zkqvc0dKBuChUZPIgMTgrM9M65397dq~qREy43J6LVy1Wl8rmiK26BzAer6g0EcUu7B0W~sYnjheNxDSsffuDW-1tQjV729iKRfc0urloyrxeYz8~LiX1A-DBhJYXADDittwdo1vFHeCKv1Jbi1XPP0nsOEkCDL625Vtm8Cc38M7ybf7Xl8QYwVnN0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
      </Link>
          
              {/* <div className='subSecondHalf'>
              <p className='nameTop'>LBH</p>
              <p className='logoName'>EXCELLENT PERFORMANCE</p>
              </div> */}

      </div>
  
      

        <div className='yum2'>
        <ul className="dropdown">
              <li><Link to="/soon">Бидний тухай</Link></li>
                   <div className='dropdown-content'>
                
                        <li><Link to="/team">Удирдлагын баг</Link></li>
                        <li><Link to="/greeting">захирлын мэндчилгээ</Link></li>
                    </div>
            </ul>
          <li><Link to="/service">Үйлчилгээ</Link></li>
          <li><Link to="/price">Хэрэгжүүлсэн төслүүд</Link></li>
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