import data from "../content/pages.json"

const Service = () =>{
    console.log(data)
    return (
        <div className="bottomAnimated">
                 <div className="middle">
            <h1 className="quote1">үйлчилгээ</h1>
            <div className='line1'></div>
            </div>
            <div className="context">
            {
                data.map(e=> 
                    
               
                    <div className="appear">
                            <h4><span>/</span>{e.name}</h4>
                            {e.service.map(e=> <p>{e}</p>)}
                    </div>
             
                    
                )
            }
                   </div>

        </div>
    )
}
export default Service