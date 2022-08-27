import {Link} from "react-router-dom";
import { useNews } from '../context/news';
import { useContext } from 'react';
import Navbar from "./navbar";
const ViewNews = () =>{
    const {news1,setNews} = useNews()
    console.log(news1)
    return(
       
            <div className="content">
             
                    <div className="topLayer">
                    <img  src={news1.image[0]}></img>
                    </div>
                    <br></br>
                    <div>Мэдээ</div>
                    <h1>{news1.name}</h1>
                    <div><a>SUPPORT</a>{news1.date}</div>
                    <p>{news1.content[0]}</p>
      
                    <p>{news1.content[1]}</p>
                    <img src={news1.image[6]}></img>
                    <div>
                        {
                         news1.image.map((e,i)=> <img src={news1.image[i+1]}></img>)
                        }
                        {
                        news1.content.map((e,i)=> <p>{news1.content[i+2]}</p>)
                        }
                        
                    </div>
            </div>
       
    )
}
export default ViewNews