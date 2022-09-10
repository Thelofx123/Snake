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
                   
                    </div>
                    <br></br>
                    {/* <div>Мэдээ</div> */}
                    <h1>{news1.name}</h1>
                    <div><a></a>{news1.date}</div>
                    <br></br>
                    <div className='line2'></div>
                    <p>{news1.content[0]}</p>
                    <img className="zurag3" src={news1.image[0]}></img>
                    <p>{news1.content[1]}</p>
                    <img  src={news1.image[6]}></img>
                    <div>
                        {
                         news1.image.map((e,i)=> <img className="zurag3" src={news1.image[i+1]}></img>)
                        }
                        {
                        news1.content.map((e,i)=> <p>{news1.content[i+2]}</p>)
                        }
                        
                    </div>
            </div>
       
    )
}
export default ViewNews