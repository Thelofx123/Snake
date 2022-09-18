import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import News from '../component/news';
import '../App.css';
import news1 from "../content/news.json"
import Footer from './footer';
import { getHeight } from 'react-slick/lib/utils/innerSliderUtils';
import project from "../content/project.json"
import Project from './projects';
import { Link } from 'react-router-dom';
import '../style/style.css'
import { useEffect, useState } from 'react';
import { motion, useScroll, Variants  } from "framer-motion";
import vip from '../img/vip.jpg'
import buddha from '../img/buddha.jpg'
import bella from '../img/bella.jpg'
import meme from '../img/meme.jpg'

const Home = () => {
   
    const imageAnimate={
        offscreen:{x:-100, opacity:0},
        onscreen:{
        x:0,
        opacity:1,
        rotate:[0,10,0],
        transition: {type:"spring",
        bounce:0.4,
        duration:1}
      }
    
    }
    
    const textAnimate={
        offscreen:{y:100, opacity:0},
        onscreen:{y:0,
        opacity:1,
        transition: {type:"spring",
        bounce:0.3,
        duration:0.8}
     }
    
    }

    const [index, setIndex ]= useState(0)
    const images = [
        vip,
        buddha,
        bella
    ];
    const buttons = [
        "button-secondary",
        "button-primary"
    ]

    const zoomOutProperties = {
        duration: 2000,
        transitionDuration: 500,
        infinite: true,
        scale: 0.4,
        arrows: false
        
      };
      const zoomOutProperties1 = {
        duration: 1000000,
        transitionDuration: 800,
        infinite: true,
        scale: 0.4,
        arrows: true
        
      };
      const responsiveSettings = [
       
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
          
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];
  
      const responsiveSettings1 = [
       
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
          
        {
            breakpoint: 200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];


    return (
        <motion.div 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, }}
        transition={{staggerChildren:1}}>
           
            <Fade {...zoomOutProperties1}>
           
           <div className="each-slide-effect">
               <div style={{ 'backgroundImage': `url(${images[0]})`,backgroundSize:'cover',backgroundPosition:'center' }}>
               <motion.h1 >VIP RESIDENCE</motion.h1>
               </div>
           </div>
           <div className="each-slide-effect">
               <div style={{ 'backgroundImage': `url(${images[1]})`,backgroundSize:'cover',backgroundPosition:'center' }}>
              
               <motion.h1 >BUDDHA VISTA</motion.h1>
               </div>
           
           </div>
           <div className="each-slide-effect">
               <div style={{ 'backgroundImage': `url(${images[2]})`,backgroundSize:'cover',backgroundPosition:'center' }}>
               <motion.h1 >BELLA VISTA</motion.h1> 
               </div>
           </div>
       
          {
              index === buttons.length ? <button className={buttons[index]}>testss</button> : null
          }
       </Fade>

    
        <div className='middleComp'><h1>КОМПАНИЙН ТУХАЙ</h1><span></span></div>
     
  
     
        <div className='aboutUs'>
            <div className='randomPic'>
                <img src='https://s3-alpha-sig.figma.com/img/07fc/f631/ba05a3fd75cafafc3310dddfc6e869cf?Expires=1662940800&Signature=BHTeOSn0rVz-qVNtaiNvbGFq9wn2es5g5P~dGi1lJlaNgK6o2dwk0YI4mkfJ8g2HIkRLOqvztZ0dBvwZXKP9QeqdIiO3jwklHorXnmENJiGHg5pewZvAFDekTZgCXZD0ny~RyxJoL-w42wkrXsD22uijYtRL8ibMD4flJgpxzdfh~ld-WfrR~o-X~V8cqHR-hN4Vp0A9NwH2BitHFwgJVpqA67qid5MSChcAgiwv~eZ2d3lcYMEp2eDyqHLxY-~aOcX4DHsPgYJzgL4aHZD~iKUt3wGbPIGEd6vajSWeGQTWwGABAJmJU38Y-lx4i2FSjkuzOSnpG~Ni67fuR8rq6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
            </div>
            <div className='content'>
                <motion.p  >Лидер Буянт Холдинг ХХК нь 2004 онд байгуулагдсан бөгөөд барилгын салбарт мэдлэг туршлага хуримтлуулсан чадварлаг мэргэшсэн, мэргэжлийн хамт олон юм. Бид барилга угсралт, засал чимэглэл, инженерийн шугам сүлжээ, зураг төсөл, эрчим хүчний цогц шийдэл зэрэг чиглэлүүдээр үйл ажиллагаагаа явуулж байна. Сүүлийн жилүүдэд бид Монголын барилгын салбарт нэр хүнд бүхий томоохон төслүүдэд амжилттай ажиллаж, өөрсдийн үйл ажиллагааг өргөжүүлэн Artsat aparment, VIP residence зэрэг төслүүдийг амжилттайгаар хэрэгжүүлж байна.</motion.p>
            </div>
        </div>

            <div className='middleComp'><h1>Хэрэгжүүлсэн Төслүүд</h1><span></span><h2>эл би эйч констракшин ххк-ийн бүтээн байгуулалт</h2></div>
           
           <div className="nuuts1">
            <Slide slidesToScroll={1} slidesToShow={2} indicators={true} responsive={responsiveSettings1}>
             {
                project.map((each, index) => <Project data={each} key={index}></Project>)}
            </Slide>
                 
           </div>

           <div className='buuton'>
                <button>ДЭЛЭГРЭНГҮЙ ҮЗЭХ</button>
           </div>
           <div className='middleComp'>
           <h1>компанийн мэдээ мэдээлэл</h1><span></span>
           </div>
          
           <div className="nuuts2">
            <Slide slidesToScroll={1} slidesToShow={2} indicators={true} {...zoomOutProperties} responsive={responsiveSettings}>
             {
                news1.map((each, index) => <News news={each} key={index}></News>)}
            </Slide>
                 
           </div>
          
           
        </motion.div>
       
    );
    };

export default Home