import data from "../content/news.json"
import {Link} from "react-router-dom";
import { useNews } from '../context/news';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";


const Newscomp = () =>{
    const {news1,setNews} = useNews()
    return (
        <Container maxWidth='xl'
        // sx={{ Width: '100%',margin:'auto'}}
        >
        <div className="bottomAnimated">
                 <div className="middle">
            <h1 className="quote1">мэдээ, мэдээлэл</h1>
            <div className='line1'></div>
            </div>
                {data.map(e=>
                <Link to="/news" onClick={() => setNews(e)}> 
                        <Card sx={{ maxWidth: 600 , marginTop:'40px'}}>
                        <CardMedia
                        component="img"
                        height="300"
                        image={e.image[0]}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="p" sx={{color:"#003659",textTransform:'uppercase'}} component="div">
                            {e.name}
                        </Typography>
                        <div className='line' style={{marginTop:'10px'}}></div>
                        <Typography variant="body2" color="text.secondary"sx={{color:"#003659",textTransform:'uppercase',marginTop:'10px'}} >
                           {e.date}
                        </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                )}
            
           


        </div>
        </Container>
        
       
    )
}
export default Newscomp