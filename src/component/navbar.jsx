import * as React from 'react';
import '../App.css';
import {
  Link
} from "react-router-dom";



const Navbar = () => {
  
  return (
  
    <div className='navbar'> 
    <div className='half'>
    <img className='zurag2' src='https://s3-alpha-sig.figma.com/img/b34d/440b/072b8596b13f7fa0659fe499725cf4a3?Expires=1661731200&Signature=AQAfjxWqJ~KjsQNBRDJSWIvJFituOyWPbXIPCoAX8I0VUQIgeYqDE~8SOFo2KOMbhN2UALiEDnpwU83TqZYHnxMB3tuuCsh0Cm-eaGBbZ8zqkBNtOkfdd0fOr7Zwl23gRiBC1BSdiFXu70i8OBpXOBes3h1Gbm1GeDpqG66BTjgYb6NnUosRAVLLYJH1qOjZVW6-p4q8kGkCkwcz4biBBoCspykpBYvVoRMPL9bbLxhEp6DU~Uk-6PFPJ4gtGvspoQs4VEfOEPCOeEjcwkliiDAMPK89JxkiR08riyKBQq4boAvSBtnoGjGvo8jMsw3M8OZOCDghWcYj3irqG9AtLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
        <div className='yum2'>
          <li><Link to="/about">Нүүр</Link></li>
          <li><Link to="/soon">Бидний тухай</Link></li>
          <li><Link to="/orders">Үйлчилгээ</Link></li>
          <li><Link to="/price">Хэрэгжүүлсэн төслүүд</Link></li>
          <li><Link to="/price">Мэдээ, Мэдээлэл</Link></li>
          <li><Link to="/price">Хүний нөөц</Link></li>
          <li><Link to="/price">Холбоо барих</Link></li>
        </div>
    </div>
 
    </div>
   
   
  );
};
export default Navbar;