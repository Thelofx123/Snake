import '../App.css';
import {Link} from "react-router-dom";
import ViewNews from './newsView';
import { useContext } from 'react';
import { useNews } from '../context/news';
const News = ({news}) =>{
    const {news1,setNews} = useNews()

    return(
        <Link to="/news" onClick={() => setNews(news)}>
        <div className='card' >
                                <div className='imageComp'>
                                <img className='zurag' src={news.image[0]}></img>
                                    </div>
                            <h1>{news.name}</h1>
                            <div className='line'></div>
                            <p>{news.date}</p>
                    </div>
        </Link>
               
       
    )
}
export default News