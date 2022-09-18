import Footer from './footer';
import data from '../content/member.json'
import '../App.css';
const Team = () => {
    console.log(data)
    return (

        <div className="bottomAnimated1">
            <h1 className='quote'>Удирдлагын баг</h1>
            <span></span>
          
            <div className='child'> 
            
            {data.map(e=>  
            <div className='teamMembers'> 
                    <img className='nameMember' src={e.image}></img>
                    <div className='names'>
                    <p className='boldName'>{e.name}</p>
                    <p className='thinName'>{e.date}</p>
                    </div>
                </div>
                )}
                 </div>
     
        </div>
              
    )
}
export default Team