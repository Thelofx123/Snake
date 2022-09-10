
import { useProject } from '../context/project';
const ViewProject = () =>{
    const {project, setProject} = useProject()
    
    return(
       
            <div className="projectPage">
                <div className="backOfProjects" style={{'backgroundImage': `linear-gradient(0deg, rgba(255,255,255,0.04359247116815477) 0%, rgba(255,255,255,0.7) 100%),url(${project.img})`,backgroundSize:'cover'}}>
                <h1>{project.name}</h1> 
                </div>
                <div className="bottomProjectPage">
                    <b>{project.title}</b>
                    <p>{project.service}</p>
                </div>
                                 
            </div>
       
    )
}
export default ViewProject