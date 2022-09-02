import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import News from '../component/news';
import '../App.css';
import news1 from "../content/news.json"
import Footer from './footer';
import { getHeight } from 'react-slick/lib/utils/innerSliderUtils';
import project from "../content/project.json"
import Project from './projects';
import '../style/style.css'
import { useEffect, useState } from 'react';

const Home = () => {
    news1.length=4
    project.length=3

    const [index, setIndex ]= useState(0)
    const images = [
        "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
              "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
            "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
    ];
    const buttons = [
        "button-secondary",
        "button-primary"
    ]
    //  useEffect(() => {
    //     setTimeout(() => {
         
    //             setIndex(prev => prev +1)
                
       
    //         if(index===2){
    //             index=== 0;
    //         }
    //     }, 2000);
    //   }, []);
    //   console.log(index)
    return (
        <div>
           
            <Slide>
           
           <div className="each-slide-effect">
               <div style={{ 'backgroundImage': `url(${images[0]})` }}>
               <h1>VIP RESIDENCE</h1>
               </div>
           </div>
           <div className="each-slide-effect">
               <div style={{ 'backgroundImage': `url(${images[1]})` }}>
              
               <h1>VIP RESIDENCE</h1>
               </div>
           
           </div>
           <div className="each-slide-effect">
               <div style={{ 'backgroundImage': `url(${images[2]})` }}>
               <h1>VIP RESIDENCE</h1>   
               </div>
           </div>
       
          {
              index === buttons.length ? <button className={buttons[index]}>testss</button> : null
          }
       </Slide>

        <div className='background'> 
        <h1>КОМПАНИЙН ТУХАЙ</h1>
        </div>
     
        <div className='aboutUs'>
            <div className='randomPic'>
                <img src='https://s3-alpha-sig.figma.com/img/07fc/f631/ba05a3fd75cafafc3310dddfc6e869cf?Expires=1662940800&Signature=BHTeOSn0rVz-qVNtaiNvbGFq9wn2es5g5P~dGi1lJlaNgK6o2dwk0YI4mkfJ8g2HIkRLOqvztZ0dBvwZXKP9QeqdIiO3jwklHorXnmENJiGHg5pewZvAFDekTZgCXZD0ny~RyxJoL-w42wkrXsD22uijYtRL8ibMD4flJgpxzdfh~ld-WfrR~o-X~V8cqHR-hN4Vp0A9NwH2BitHFwgJVpqA67qid5MSChcAgiwv~eZ2d3lcYMEp2eDyqHLxY-~aOcX4DHsPgYJzgL4aHZD~iKUt3wGbPIGEd6vajSWeGQTWwGABAJmJU38Y-lx4i2FSjkuzOSnpG~Ni67fuR8rq6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
            </div>
            <div className='content'>
                <p>Лидер Буянт Холдинг ХХК нь 2004 онд байгуулагдсан бөгөөд барилгын салбарт мэдлэг туршлага хуримтлуулсан чадварлаг мэргэшсэн, мэргэжлийн хамт олон юм. Бид барилга угсралт, засал чимэглэл, инженерийн шугам сүлжээ, зураг төсөл, эрчим хүчний цогц шийдэл зэрэг чиглэлүүдээр үйл ажиллагаагаа явуулж байна. Сүүлийн жилүүдэд бид Монголын барилгын салбарт нэр хүнд бүхий томоохон төслүүдэд амжилттай ажиллаж, өөрсдийн үйл ажиллагааг өргөжүүлэн Artsat aparment, VIP residence зэрэг төслүүдийг амжилттайгаар хэрэгжүүлж байна.</p>
            </div>
        </div>

            <div className='middleComp'><h1>Хэрэгжүүлсэн Төслүүд</h1><span></span><h2>эл би эйч констракшин ххк-ийн бүтээн байгуулалт</h2></div>
           
           <div className="secondImageslider">
            {project.map(e=> 
               <Project data={e}></Project>
            )}        
           </div>

           <div className='buuton'>
                <button>ДЭЛЭГРЭНГҮЙ ҮЗЭХ</button>
           </div>
           <div className='middleComp'>
           <h1>компанийн мэдээ мэдээлэл</h1><span></span>
           </div>
          
            <div className='news'>
            {
            news1.map( e=> <News news={e}></News>)}
            </div>
            <div className='box-D400'>
            test
        </div>
       
           
        </div>
       
    );
    };

export default Home