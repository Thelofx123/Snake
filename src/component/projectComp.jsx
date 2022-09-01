import data from "../content/news.json"
import {Link} from "react-router-dom";
// import { useNews } from '../context/news';

const Newscomp = () =>{
    // const {news1,setNews} = useNews()
    return (
        
        <div className="bottomAnimated">
                 <div className="middle">
            <h1 className="quote1">мэдээ, мэдээлэл</h1>
            <div className='line1'></div>
            </div>
            <div className="child1">
                {
                    data.map(e=> 
                            <div className="newsComp">
                                <div className="hover" style={{'backgroundImage': `url(${e.image[0]})`,width:"560px",height:"438px",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></div>
                                <Link to="/news" onClick={() => setNews(e)}> <h4>{e.name}</h4> </Link>
                                <div className='line'></div>
                                <p>{e.date}</p>
                            </div>
                        )
                }
            </div>

        </div>
       
    )
}
export default Newscomp