import data from "../content/project.json"
import {Link} from "react-router-dom";
import { useProject } from '../context/project';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";


const ProjectComp = () =>{
    const {project, setProject} = useProject()
    return (
        <Container maxWidth='xl'
        // sx={{ Width: '100%',margin:'auto'}}
        >
        <div className="bottomAnimated">
                 <div className="middle">
            <h1 className="quote1">ХЭРЭГЖҮҮЛСЭН ТӨСӨЛҮҮД</h1>
            <div className='line1'></div>
            </div>
                {data.map(e=>
                <Link to="/project" onClick={() => setProject(e)}> 
                        <Card sx={{ maxWidth: 700 , marginTop:'40px'}}>
                        <CardMedia
                        component="img"
                        height="500"
                        image={e.img}
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="p" sx={{color:"#003659",textTransform:'uppercase'}} component="div">
                            {e.name}
                        </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                )}
            
           


        </div>
        </Container>
        
       
    )
}
export default ProjectComp