import { Slide,Fade,Zoom } from 'react-slideshow-image';
import {motion} from "framer-motion"

const Hr = () =>{


    const images = [
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-16.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-15.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-13.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-10.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-9.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-3.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-4.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-1.jpg",
        "https://lbh.mn/wp-content/uploads/2019/04/lbh-2.jpg"
    ];
    return(
     
        <motion.div className="bottomAnimated1"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
                 <div className="middle">
            <h1 className="quote1">хүний нөөцийн бодлого</h1>
            <div className='line1'></div>
            </div>
            <div className="paragraph">
                    <p >
                    Бид хүний нөөцийн чадавхыг сайжруулах, байгууллагын бүтээлч соёлыг төлөвшүүлэх чиглэлээр менежментийн цогц бодлогыг сүүлийн жилүүдэд тогтвортой явуулж ирлээ. Энэхүү бодлогын үр дүнд  хүний нөөцийн оролт гаралтын хөдөлгөөн эрс багасаж (ажлаас өөрийн хүсэлтээр гарах явдал байхгүй болсон), олон шилдэг инженер техникийн ажилчдаар эгнээгээ бэхжүүлж байна. Байгууллагын зүгээс ажилчдаа сургаж хөгжүүлэх тал дээр ихээхэн анхаарч, бүтээмжийг сайжруулах зорилгоор олон аян, хөтөлбөрүүдийг хэрэгжүүлж ирсэн бөгөөд чанарыг эрхэмлэдэг, хурдтай, бүтээлч хандлага бидний ажлын арга барил болон тогтжээ.Үүний баталгаа нь 2018 онд бидний дэвшүүлсэн чанарын зорилт 80 дээш хувьтайгаар биелсэн. Бид ажилчдын ахуй амьдралыг сайжруулах чиглэлээр орон байрны асуудлыг нь шийдэж өгөх, дэмжлэг туслалцаа үзүүлэх зэргээр “хүн төвтэй” менежмент явуулдаг. Энэ нь ажилтан хүний ажилдаа хандах хандлага, сахилга бат, хариуцлагыг дээшлүүлж байгууллагаараа бахархах үзлийн суурь болж өгдөг.
                    </p>
            </div>
         
            <div>

            <Fade >
          {
            images.map((each, index) => <div key={index} style={{width: "100%",height:"600px",'backgroundImage': `url(${each})`,  backgroundPosition:"center"}}   ></div>)
          }
        </Fade>


      </div>
        </motion.div>
   
    )
}
export default Hr