import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import News from '../component/news';
import '../App.css';
import news1 from "../content/news.json"
import Footer from './footer';
const Home = () => {
    const images = [
        "https://s3-alpha-sig.figma.com/img/76e2/28a9/a94aab06a2c82b0684ea972d005d941c?Expires=1661731200&Signature=c9DSiUnx-ZUMFgZl6M2GU-CAHsgaQL7aVy6QiguSLoJr6a888d3OHyLycsjV6ZcOJzKoETrt0eyZhZnYxDyHRfUbO2a5vWNnETbjktileswzW3iafqHeMnR9KWK3CLq4e7fnLrlgBHomNuIe1hXzt-QLgI7B0A8r65YQxQGEzNtdqEtXSQW31YoGAunafKQfFXaXE812RLCCAmXuPsbfitWEHSQ9TvydVCNi2LQfoN85genuG7YYxv4TSW8MfvcDd9NG-8kws1UMeLQx8eGXsTvX5KKhaVHyiAXkw1xjqbUuXqvKWnXxpYl6C8kaXvS6o-fkO-9tMnqJm-mqLW7xmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              "https://s3-alpha-sig.figma.com/img/76e2/28a9/a94aab06a2c82b0684ea972d005d941c?Expires=1661731200&Signature=c9DSiUnx-ZUMFgZl6M2GU-CAHsgaQL7aVy6QiguSLoJr6a888d3OHyLycsjV6ZcOJzKoETrt0eyZhZnYxDyHRfUbO2a5vWNnETbjktileswzW3iafqHeMnR9KWK3CLq4e7fnLrlgBHomNuIe1hXzt-QLgI7B0A8r65YQxQGEzNtdqEtXSQW31YoGAunafKQfFXaXE812RLCCAmXuPsbfitWEHSQ9TvydVCNi2LQfoN85genuG7YYxv4TSW8MfvcDd9NG-8kws1UMeLQx8eGXsTvX5KKhaVHyiAXkw1xjqbUuXqvKWnXxpYl6C8kaXvS6o-fkO-9tMnqJm-mqLW7xmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            "https://s3-alpha-sig.figma.com/img/76e2/28a9/a94aab06a2c82b0684ea972d005d941c?Expires=1661731200&Signature=c9DSiUnx-ZUMFgZl6M2GU-CAHsgaQL7aVy6QiguSLoJr6a888d3OHyLycsjV6ZcOJzKoETrt0eyZhZnYxDyHRfUbO2a5vWNnETbjktileswzW3iafqHeMnR9KWK3CLq4e7fnLrlgBHomNuIe1hXzt-QLgI7B0A8r65YQxQGEzNtdqEtXSQW31YoGAunafKQfFXaXE812RLCCAmXuPsbfitWEHSQ9TvydVCNi2LQfoN85genuG7YYxv4TSW8MfvcDd9NG-8kws1UMeLQx8eGXsTvX5KKhaVHyiAXkw1xjqbUuXqvKWnXxpYl6C8kaXvS6o-fkO-9tMnqJm-mqLW7xmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    ];

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
       
          
       </Slide>

        <div className='background'> 
        <h1>КОМПАНИЙН ТУХАЙ</h1>
        </div>
        <div className='aboutUs'>
            <div className='randomPic'>
                <img src='https://s3-alpha-sig.figma.com/img/07fc/f631/ba05a3fd75cafafc3310dddfc6e869cf?Expires=1661731200&Signature=YLeI6~0nCMRDk0fREW4vMg67WZ39jKPbjWlheIQ5Jpph3wkKq-Dz~zbnvj6kI-eDhT5ECjizDg4IJDr~nRCtMtYpaWiWgyqxKAB18JcuUO0NPwbbSZzwgplvmYfj0W2J7aJ0FZfJdhMMGHlC4lvo5iine2lnpMZMK2AlZlrKVcUlVBk~GACkZ0bXeJ944y4X~d6viVeTxUC7umqRFeJ9OBmvWIF7e9u~Q2HAKAWr5BwUuP3ujV3Q~HVz0BhkjST3CnLpMvs6aehuQD9chT2yAxXcgGYA3jsU-9V~IHGsynSYzZd8CRgimi20cjYq0BzIiiwLUPbtbKrLL2QTeIZ0CA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></img>
            </div>
            <div className='content'>
                <p>Лидер Буянт Холдинг ХХК нь 2004 онд байгуулагдсан бөгөөд барилгын салбарт мэдлэг туршлага хуримтлуулсан чадварлаг мэргэшсэн, мэргэжлийн хамт олон юм. Бид барилга угсралт, засал чимэглэл, инженерийн шугам сүлжээ, зураг төсөл, эрчим хүчний цогц шийдэл зэрэг чиглэлүүдээр үйл ажиллагаагаа явуулж байна. Сүүлийн жилүүдэд бид Монголын барилгын салбарт нэр хүнд бүхий томоохон төслүүдэд амжилттай ажиллаж, өөрсдийн үйл ажиллагааг өргөжүүлэн Artsat aparment, VIP residence зэрэг төслүүдийг амжилттайгаар хэрэгжүүлж байна.</p>
            </div>
        </div>

            <div className='middleComp'><h1>Хэрэгжүүлсэн Төслүүд</h1><span></span><h2>эл би эйч констракшин ххк-ийн бүтээн байгуулалт</h2></div>
           
           <div className="secondImageslider">
               

               <div className='threeImage' style={{ 'backgroundImage': `linear-gradient(0deg, rgba(255,255,255,0.04359247116815477) 0%, rgba(255,255,255,0.7) 100%),url(${images[1]})` }}>
            <span className='span'>VIP RESIDENCE</span>
            </div>
               <div className='threeImage' style={{ 'backgroundImage': `linear-gradient(0deg, rgba(255,255,255,0.04359247116815477) 0%, rgba(255,255,255,0.7) 100%),url(https://s3-alpha-sig.figma.com/img/d782/bad2/b007a58d20ca3df19b564394c9aaf4f5?Expires=1661731200&Signature=JfxNi8jRRqNjfguz6XtdLYGtuTbJklYzUeiWmscqV-uf9LbH7DLJJQEYQE0aJQL3DP3R1I1P8ERts7QtivUppOT1580FOgrsDV5vHs1gvNsIYxaedgfYZZUIIaXc32mSV8f1DFxpmTmjbwcwfFJXkDc6Rbu4qQSgWRsfi11KIvx0ypHw4xi6-7rqhtQ4zRg5S7PU3kJFWaYIa511Tcjxe69zXYc9CnAVL4ujKouBJ99gfQD~hZbOzRIOW3VvUZAcHX3tjtMuA5Kjkvtf3TTKe5uYMv9bGEMwQjKLkcSqV01mlIUOFXrvzGouDNP4TRnnMmseUYi5qD6VtlVW7STTqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`}}> 
               <span className='span'>ARTSAT APARTMENT</span>
            </div>
                 <div className='threeImage' style={{ 'backgroundImage': `linear-gradient(0deg, rgba(255,255,255,0.04359247116815477) 0%, rgba(255,255,255,0.7) 100%),url(https://s3-alpha-sig.figma.com/img/6a57/cd87/955ea26bf14abab66b5235fa4f9cbd53?Expires=1661731200&Signature=IVrXaitdUSTtovtR8GdbgdZ5VSYYittUVGW6A~caCkxGtkKxpN00DWc7DToz6p~KE2YYPpH8qfdW2l2WkM~7QVZ2aHADwxWTZlOUm9c08tSDJXFc5iFnQ7peEQQuGOlqO~rxe-FWTfO0Dhx1Vy1cgiVfYG16vhMPVV4lGYO-FUyq7ZVr~BAtaWOqh0zihoK1pxNpQDvfpBr7czWvPh0ye5XgD-s9A0DJEC0-hW~uvVGhvpPoFlRedB0ZcvvApJegSJl41qDavoojaKiSh4~cAIz~20JTNeTsZf6rZoGeqBuUr51XfO27PnCMBmZASJOKLe36a17Or8GymXL0XmNbeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)` }}>
                 <span className='span'>HIGH APARTMENT</span>
            </div>
               
               
           </div>

           <div className='buuton'>
                <button>ДЭЛЭГРЭНГҮЙ ҮЗЭХ</button>
           </div>
           <div className='middleComp'>
           <h1>компанийн мэдээ мэдээлэл</h1><span></span>
           </div>
          
            <div className='news'>
            {news1.map( e=> <News news={e}></News>)}
            </div>
            
       
           
        </div>
       
    );
    };

export default Home