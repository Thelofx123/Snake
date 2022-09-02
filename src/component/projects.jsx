import '../App.css';
import {Link} from "react-router-dom";
import ViewNews from './newsView';
import { useContext } from 'react';
import { useProject } from '../context/project';
const Project = ({data}) =>{
    const {project, setProject} = useProject()
    
    return(
      
          <div  className='threeImage' style={{ 'backgroundImage': `linear-gradient(0deg, rgba(255,255,255,0.04359247116815477) 0%, rgba(255,255,255,0.7) 100%),url(${data.img})` }}>
              {/* <img  src={`${data.img}`} ></img> */}
                 <Link to="/project" onClick={() => setProject(data)}>
                 <span className='span'>{data.name}</span>
                 </Link>
                 </div>
  
               
       
    )
}
export default Project