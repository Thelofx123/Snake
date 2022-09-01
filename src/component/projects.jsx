import '../App.css';
import {Link} from "react-router-dom";
import ViewNews from './newsView';
import { useContext } from 'react';
import { useProject } from '../context/project';
const Project = ({data}) =>{
    const {project, setProject} = useProject()
    
    return(
        <Link to="/project" onClick={() => setProject(data)}>
          <div  className='threeImage' style={{ 'backgroundImage': `linear-gradient(0deg, rgba(255,255,255,0.04359247116815477) 0%, rgba(255,255,255,0.7) 100%),url(${data.img})` }}>
              {/* <img  src={`${data.img}`} ></img> */}
          
                 <span className='span'>{data.name}</span>
                 </div>
        </Link>
               
       
    )
}
export default Project