
import { Slide,Fade,Zoom } from 'react-slideshow-image';


const Hr = () =>{


    const images = [
        "https://s3-alpha-sig.figma.com/img/310f/88b4/6ba114c099e10e6f64782e40470962bb?Expires=1662336000&Signature=Nuxf7hE3EG36VbdZTpg34Q1brUhebdB~Eq5nk0UMNr6mL6U6sQltdDAN1W7Am9cstzHKWyZRDRwAO1yVDG8Z4j4R-oj7gV3Zs9H52G-Wj7NIlRfP2gcWBvhSWjWYQXyhoZsG8Hh8DQsFNDHmJS4B-qssZ3rj7M2H~ewd-xv2d4m42Ln4xWRTkOCiqcElmEMJxdfa-ZJ4MtaaYAunQRU0M3VAptFD0E6PscDDUKr3S3zf9me5Edt6b-DUmMuQ6w7eLA4bHF50jB8HhQdqXQUtzrhZ1aDVkgEuaNOKH6rXdbEMr2lP1ixMgLZqjerEXMduiQFVrB9gMt4iMTY4JnPJXw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/3503/94bd/53e98cedec1b43a8d5dde5c7ce80b49a?Expires=1662336000&Signature=Vk4fRe~Ji8ta3HBkNKDVZ6Moc6ZUNXnJRFpHk3jeGnWOohMo8pKoofiF0Vv9kDMwKde9KXTQXt8458eC-1~pgZ70rAUAJlCT8hBz~rDwNmW~SYYCqxXAI8ovy71PZmKvAd3DH1Pb51xtSEZrHUOJkuvjawhKQLxtc1kh5Idw9APuxuOZSdyYD2I54ELPmorsm1B8FnPSrysCAaZYrZAHBbCFX0C76bbDVZ8PtvgFpn7lr9f~n88yuOUqychDjlYqlnXMxFW20c0Q3Ei6HMfwTRh7L-tWsUsNhfSsFxI9ofanRBdke7n2eflsNfYnhQMjhRw3Y0qSnuVKuB3ykoXSdA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/bce6/d8b3/cbcc66cab7eb31c7730bc4c5a2acb22f?Expires=1662336000&Signature=dyYFQaJNyiGYC6wLDxZdB35q1S2sjJHldap2wVoVz3jZ4p-y2oITHZxx2jiLyYoXAsiJfIBC~DPkAcYUmTohMXGpAaZZAIUWlcX0~yXy3xb4UNC75jgRmG0TqlOXq5DYSWG5pS9U8mKJU2GEiOzW7lZAxIMHGFQkg6U3VvRnx6gvg3sxvBsly1Yd142KzzrXFgYGYoXPCIHpbopumLGpIZuHT7cGqcTtkbe5UwO1nhmBtZvaeHYCHETt1~oGyKzGCsMGDDvkz~iuNwBm--juM-ZOwHPEou1ha05rSI8EhiNpV0SbFAsVPSUTX9b59jIl3rEbeCIdLWaQyPUgeOM1qw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/a83e/cb93/36e7e1e7afb822317946ba7203b6103f?Expires=1662336000&Signature=L0gVpXhMpY5ros8buIz3Lq2Y6~CRW4MM5fsnWvg90jC75xFuAwk7ZWtKzgCGWAOQ5sbElW606AnUIEXfPzornCghukm0j2ZtZ-JpRcpPovbSbjvKMieRxNqRxx9w9NiObl~eMv7Uu8CSKWDRa8R57JaO5IZCPqaTr8hxsMSL05C7skIh~p872-P4L0XUzYqiY8-WQdNt4prrb95loWGR-AuBYlv35Ycum4qOIN7A6aIpiShgs8YlDagr0P5CjFq07w~T1d9pRhCiy10i7p4UfAQYNB-FPiyNdBUGCyAeAaD47JSFdygbkkobFyRk8b77GxgTZ7MfJqhODjLKd7ieZg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/859f/4e12/2c82bdd1ad18cd9ca6d6d7063b4353aa?Expires=1662336000&Signature=ErcBaCT1ir9y6FVWmMgPKOtLA-pfTTKg8lhiCMZIFQTITP9eCesl~9HL1TDPo1658o~aWF7BMSA65~2LG9SGPsGt9htNcH5oGJtuMM3f2N26UTb2Eey6EzFdrWKblZS2FWYfJsKBZyHVzorKqI1O76JuMVgbst1MKIqc6EckulliDly41GuscyWMSko-YavZJ3wBKJ9OxAWk~~VKZxoNoYpThHwLrNLhHrxPLykih9RPdWPGiLGr9pa06hjyr3HsLHkPoF8LYNS8L3bzJSKEwQTKsOm4lDPjynpBxURIRHE8tcqcCvGQ2fTTibUmjfWBBBa5bCwxrBZWOPvGCfrhWQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/0afd/8053/71a0ed6cf2a49832c4229d3e0eafb6a5?Expires=1662336000&Signature=fziIZ2xbHYsOa4xI8Wn5XkssJREoc1Ig8TtlraI4r94cUSs6SRC0HYbwJhr4PvVJN8xIGIgZe0wCvZV~B429Gmlb2vArmdBj-0-hFZ0-DpnFPij0RRAAU1wV9YdZ8sOWSvvxnWr7QrWDcZKZ4JKU4uM2ixi0OOGcd1eArtIop0qbs69DXW3FlON3i5U6cRLdo3aoPYnwwaRhv4iwmoB479dgKnh2CNv594uNSYLT1oa340ydzr-1igqPMf~W~W9LOkwBNX9Q2NrGuaGtUkGMC0moLp3HSF4tn22oyHwKmD3yQH4oNusBWAgGXcfP6Q4HPbYOnOZLuLJ5xcx2iD7w9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/ab88/564c/722371dfd8b384f07a87c19b2aad6e96?Expires=1662336000&Signature=a2NvT9YuX2HRzyAk2dX-UuHSLHqPmSty45GFcBHXotdjeaknw3MBi5xowFkEMXNiH5vcCQAvK4wTmY2Vhmdq5cg6AZWggd~ivqjbVZtwgb4Lfo307tAzIKypPcp4dlRNaUqRjOYJULjN1LGfl-JM05xGZzPELnaPwClmkegkfTApuKcNvwzdNOXsWdN7ZYnbgf7AAjeKxUW7scGnrIAQGjqDrZwC2p5FkzY83hRNL9sXeP0k6RNEt4lgE0xhF4FKKdH0fC~jj2PBMlsEoNGpuT6fn75BGwmRNnDtnISvNZF3u7HsY-kxFvG70AjUkIFxhmaQlpWbrB1Jx5ssoqCm3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/a5b2/7f1c/f3745ffcb0afb7a2d45af10b0d5f558e?Expires=1662336000&Signature=VpEyMs~4VvNn~PHr07BMheHjsg1NjXOWsrNEfGTxYJfopNJRBw2gOiRq2qTS0~ABmNiQ0khCQgoLEukNG3bXcGwDtN0P9XcoUpoSlk76cVDEnlXKmaJPLrUaVPquFjrd8dOcUo3Q9G12URp7eKoJl0umt2gxhj2I7TwBy8FNmsL-LlVRegUlBDQY0liRKzO4MztcRjTBaNrGbOCDrv3UC9V6nS0ivNQ-S58Oq6N6SB3dPFgj0Cy63mJ-YSs58jTiv1sHT72KMxDI~T3Gi7dZCaC-OR8CFvgWAporyYPr4KfStzKpyHJdatxrTSFowBr61AbOLdV4Paqo5vXR3ZhpOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/ccb2/1199/306c3dc34c9f016ce80a48e23a143c30?Expires=1662336000&Signature=d9skqSnxy0MpISbI8S9IUTLfQ7~9j1XuLV2-hy0IIivQqNamzi~6A~mSNTmxKyKhnvNbMHIFHkobGWiwAGPFbd7pvbMAcrP2Ls7FwfhTwFEhsQxOGE8L1o5zqRVn7pBV5gIHWmVrpx8FB82lo7IEpBzlaekc8jJmKTHVz91Q-tVbR5mbO3SZiaOaySeIHr7Te6AEIZUXBrDthFFqJvxjskC7800FvAohsxV28NHJzLpT~lioI65-nImG68mxb~1WJv621In3f~xTku~LqSU~nNuW1gEaYGKwiQhE~-vwWT8pkLggTn-JeKnklfNN8Bbb4cLUt~HATEp5XdIQP5f4zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "https://s3-alpha-sig.figma.com/img/97cd/72fa/e3d5004691f1fa59d002b13cd830160c?Expires=1662336000&Signature=cj4QWN6oohLuUq5iaMnj0W0N6~sgfa00uFTkGj94-cLq3q27Q3o0xCrovkxhbCYQFpKuNo8Ia-DazCWPUHWXBdRKsq-raEinGVK~wZvRheN5beUracuA-QwVpAejXCubD0C7tbGAQ99uJ2BKrRqdUAQe4jZ065dSoTrcSWOA873JQTqEnuCeAIW4aGT6nQm8YiJbOXmojZSJiumVoBbCPKRHd55wmpicEL5BQzHqyoxOqy9FNy9n2CWGyU5YIl~My6FS4evbXPK4~n~29vXtioA3U-DJwaeKy69qNQ5jF-MD4eqzMUfb0-Uq2pQB0FlX~O9yRKLdB3lTTkijE9SvGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    
    ];
    return(
     
        <div className="bottomAnimated">
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
        </div>
   
    )
}
export default Hr