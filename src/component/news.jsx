import '../App.css';
import {Link} from "react-router-dom";
import ViewNews from './newsView';
import { useContext, useEffect } from 'react';
import { useNews } from '../context/news';
import {motion} from "framer-motion"
const News = ({news}) =>{
    const {news1,setNews} = useNews()
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <Link to="/news" onClick={() => setNews(news)}>
        <motion.div className='card'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
                                <div className='imageComp'>
                                <img className='zurag' src={news.image[0]}></img>
                                    </div>
                            <h1>{news.name}</h1>
                            <div className='line'></div>
                            <p>{news.date}</p>
                    </motion.div>
        </Link>
               
       
    )
}
export default News