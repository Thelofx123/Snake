import '../App.css';
import { SocialIcon } from 'react-social-icons';
const Footer = () =>{
    return (
        <div className='footer'>
                <div className='subFooter'>

         
                        <div className='footerCard'>
                                <h1>ХАЯГ</h1>
                                <div className='line'></div>
                                <h2>Хан-уул дүүрэг, 2 дугаар хороо,Токио товер, 7 дугаар давхар</h2>
                        </div>
                        <div className='footerCard'>
                                <h1>холбоо барих</h1>
                                <div className='line'></div>
                                <h2>+976 7711-1929,
                                8911-2992
                                        8811-8422,
                                9500-1929</h2>
                        </div>

                        <div className='footerCard'>
                                <h1>сошиал линк</h1>
                                <div className='line'></div>
                                <div className='icons'>
                                    <p><SocialIcon url="https://www.facebook.com/LBHConstruction" bgColor="#fff" style={{ height: 32, width: 32 }}  /></p>
                                <p><SocialIcon url="https://instagram.com" bgColor="#fff" style={{ height: 32, width: 32 }}  /></p>
                                <p> <SocialIcon url="https://twitter.com" bgColor="#fff" style={{ height: 32, width: 32 }}  /></p>
                                <p><SocialIcon url="https://linkedin.com" bgColor="#fff" style={{ height: 32, width: 32 }}  /></p>
                                <p><SocialIcon url="https://youtube.com" bgColor="#fff" style={{ height: 32, width: 32 }}  /></p>
                               
                                
                              
                                </div>
                                
                        </div>
              
                    </div>
                    </div>
    )
}
export default Footer