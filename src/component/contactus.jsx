import { LocalActivity, LocationCity, LocationOn, Mail, MailOutline, Phone } from "@mui/icons-material"
import { Box, createTheme, Typography } from "@mui/material"
import { Container } from "@mui/system"
import MailIcon from '@mui/icons-material/Mail';

import { styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';



const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
theme.Container ={
    '@media (min-width:600px)': {
        padding:0,
        display:'block'
      },
}

const Contact = () =>{
    
    // return(
      

 
    //     <Box sx={{marginTop:'60px'}}>
    //         <Box sx={{padding:'200px'}}>
    //         <Typography sx={{textAlign:'center',fontSize:'3rem',textTransform:'uppercase',fontWeight:'bold'}}>Холбоо барих</Typography>
    //         <Typography sx={{textAlign:'center',marginTop:'20px',fontSize:'1.5rem',color:'#9f9f9f'}}>TomYo Edtech is an educational technology company with a mission to enable world-class opportunities directly to the hands of developing nations’ youth.</Typography>
    //         </Box>
    //         <iframe src="https://snazzymaps.com/embed/423205" width="100%" height="600px" ></iframe>
    //         <Container sx={{display:'flex', textAlign:'center',padding:'150px',alignItems:'center',justifyContent:'center'}}>
                
                
    //             <Box sx={{width:'30%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
    //                 <Box sx={{width:'80px',height:'80px',background:'conic-gradient(#003659,#ff3939,#ffffff,#ff3939,#003659,#ff3939,#003659,red,#003659)',borderRadius:'50%',textAlign:'center',alignItems:'center',display:'flex',justifyContent:'center'}}>
    //                 <LocationOn sx={{width:'40px',height:'40px',background:'#fff',borderRadius:'50%',padding:'14px'}} />
    //                 </Box>
    //             <Typography  sx={{marginTop:'20px',fontSize:'2rem',fontWeight:'bolder'}}>Office</Typography>
    //             <Typography  sx={{color:'#9f9f9f',height:'30px'}}>Хан-уул дүүрэг, 2 дугаар хороо, Токио товер, 7 дугаар давхар</Typography>
    //             </Box>

    //             <Box sx={{width:'30%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
    //                 <Box sx={{width:'80px',height:'80px',background:'conic-gradient(#003659,#ff3939,#ffffff,#ff3939,#003659,#ff3939,#003659,red,#003659)',borderRadius:'50%',textAlign:'center',alignItems:'center',display:'flex',justifyContent:'center'}}>
    //                 <Phone sx={{width:'40px',height:'40px',background:'#fff',borderRadius:'50%',padding:'14px'}} />
    //                 </Box>
    //             <Typography  sx={{marginTop:'20px',fontSize:'2rem',fontWeight:'bolder'}}>Phone</Typography>
    //             <Typography  sx={{color:'#9f9f9f',height:'30px'}}>(976) 77111929</Typography>
    //             </Box>

    //             <Box sx={{width:'30%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
    //                 <Box sx={{width:'80px',height:'80px',background:'conic-gradient(#003659,#ff3939,#ffffff,#ff3939,#003659,#ff3939,#003659,red,#003659)',borderRadius:'50%',textAlign:'center',alignItems:'center',display:'flex',justifyContent:'center'}}>
    //                 <MailIcon sx={{width:'40px',height:'40px',background:'#fff',borderRadius:'50%',padding:'14px'}} />
    //                 </Box>
    //             <Typography  sx={{marginTop:'20px',fontSize:'2rem',fontWeight:'bolder',}}>Mail</Typography>
    //             <Typography  sx={{color:'#9f9f9f',height:'30px'}}>info@lbh.mn</Typography>
    //             </Box>


               
                
    
    //         </Container>

    //     </Box>

    // )
    return (
        <div className="bottomAnimated1">
                <div className="middle1">
                    <h1 className="quote1">Холбоо барих</h1>
                    <p>TomYo Edtech is an educational technology company with a mission to enable world-class opportunities directly to the hands of developing nations’ youth.</p>
                    <div className='line1'></div>
                </div>  
                <iframe src="https://snazzymaps.com/embed/423205" width="100%" height="600px" ></iframe>
                <div className="gradLogos">
                    <div className="grad">
                            <div className="gradWrapper">
                            <LocationOn sx={{width:'40px',height:'40px',background:'#fff',borderRadius:'50%',padding:'14px'}} />
                            </div>
                            <div>
                            <Typography  sx={{marginTop:'20px',fontSize:'2rem',fontWeight:'bolder'}}>Office</Typography>
                            <Typography  sx={{color:'#9f9f9f',height:'30px'}}>Хан-уул дүүрэг, 2 дугаар хороо, Токио товер, 7 дугаар давхар</Typography>
                            </div>
                    </div>
                    <div className="grad">
                            <div className="gradWrapper">
                            <Phone sx={{width:'40px',height:'40px',background:'#fff',borderRadius:'50%',padding:'14px'}} />
                            </div>
                            <div>
                            <Typography  sx={{marginTop:'20px',fontSize:'2rem',fontWeight:'bolder'}}>Phone</Typography>
                            <Typography  sx={{color:'#9f9f9f',height:'30px'}}>(976) 77111929</Typography>
                            </div>
                    </div>
                    <div className="grad">
                            <div className="gradWrapper">
                            <MailIcon sx={{width:'40px',height:'40px',background:'#fff',borderRadius:'50%',padding:'14px'}} />
                            </div>
                            <div>
                            <Typography  sx={{marginTop:'20px',fontSize:'2rem',fontWeight:'bolder',}}>Mail</Typography>
                            <Typography  sx={{color:'#9f9f9f',height:'30px'}}>info@lbh.mn</Typography>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Contact