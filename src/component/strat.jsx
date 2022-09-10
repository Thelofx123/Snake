
import { Slide ,Fade,Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../App.css';

const Animated = () => {
    const zoomOutProperties = {
        duration: 2000,
        transitionDuration: 500,
        infinite: true,
        scale: 0.4,
        arrows: false
      };
 
    const images = [
        "https://lbh.mn/wp-content/uploads/2019/04/logoNEW-320x229.png",
              "https://lbh.mn/wp-content/uploads/2019/04/logo.png",
            "https://lbh.mn/wp-content/uploads/2019/04/logo11.png",
            "https://lbh.mn/wp-content/uploads/2019/04/itzone-logo-bluebackground-320x115.jpg"
    ];
    return(
        <div className="bottomAnimated1">
                 <div className="middle">
            <h1 className="quote1">СТРАТЕГИЙН ТҮНШҮҮД</h1>
            <div className='line1'></div>
            </div>

            {/* <div className="icons1">
           

                <img src="https://s3-alpha-sig.figma.com/img/b8f0/311a/0ca45e82e63d6195f2b7e87216283c9c?Expires=1662336000&Signature=FsYw26xtZM12dhwXTXTrL9XgFTYFs898uJJ~BQVOH76Jh7VtnvGHWN9YhHQXesZPLg~pmbcRZ3upPG6YjS6AtizZ2Dxwr4YFvUFEdCQbdN-pYyYhsJlkS6fA9VruDY8MV27MiMHVo5QMSkuUGopU3M~zBrXKKX0d8fXgqN~QGhbohs6lf8rjuvL~T3W-nMOhRUmP5zg7sn7nE9emghwJc1J9qTC5H30sMbG6GJf7Sdq7wcNIoYuA1bT1tV4u6Zvw4-odb1bWXrEG6cuTx4FpsSyMY7FgqShDsW~3FCR5-64BPW8RHoD0t~-HrhCgUwS-gQsOAFTmujTOVxt7U9rcwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                <img src="https://s3-alpha-sig.figma.com/img/3ef1/fda5/7b020b4c19f5cedaef9616f21f8af6bf?Expires=1662336000&Signature=bnjPVr9yVJaTO5k7lExJqvuvntP7ops7bfV0fHTY7UAR-UGstZ6WMjnVngvgv2VMjWrmeHpg51CZPR3prhY9UQV1K0OzbG1g0DX4018eWa~8Jr~aDh7KsD6fWOW0OpKEoi4scrjIO0o1Z7hW08wAWVtscJcvq0X66KfHl5HApzSW-R~n2K~wXi~M8X9NefuFZFqYwk2exMfsMe3l4JjHsX5Jc3sRf0EvT1oO28fRYmPlerfVitDZpU5i~MV931fwTHXYIDTfG4Y-M5W-qALvc8axx9nTcct~mO0JwtbwYKk7ZZShL1kos1dfmMIplA1g1kyjp3LdF9LL7XkD3XrDgQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                <img src="https://s3-alpha-sig.figma.com/img/1c7c/1ff9/7ace42e9fd3b5d75d5dbc88bc171e37e?Expires=1662336000&Signature=afm~SED1Rd78dA1nT75g28WqK4TbvofLYAio24VI6FwJrWyLQl4K8yGgZ15ABOqChfUGdmYms83B5v8snStXihFEE5CdTRG4ebrIv1wAGocWyXo3PJheBUlqhXxRIKXOmuxRQdF5OL19JqIL1-8Y08TqxY-PNavtTKhoMpp6hHMl7qDtJ6ysb5mFzC0GG~SU~1vVud34WiIlBmzRP8kPy7j3IzfsHuJdF85q8iBen~pbcngMJWJotBj0Hq-HeBJsOdE8q68Tc7tYuoOZ4OSESM-kUkE3rhq1fhcH-LDIn2iZ2IinzcmBpSNAKUQGqyy-mp9inmrUpI0mR-F9LSIUCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                <img src="https://s3-alpha-sig.figma.com/img/f536/f556/3498e14d92441e74f7147ae58cce6ee3?Expires=1662336000&Signature=KZQ2bdRE3dRg8Ptynv1pl-MJAH3imFvDVNMvKXd5a2WeV17cmmhS3ksagzEaQbkOhSQCeMsNkTHZikToqbkBQjefxzyhPgDjjZpMhlZbRUKzzsgc-8eBbE46Zma4ebyQuvh1HgPUzJUVMcbJW-Cv0zu6OarFOII1vEkXDSRYun1Ghn31xxvYx6ec16p0dGwhxeC3XvmJ0jOWGr9Dmg7S71P2OqlrWaAq6x2~nKoBbIzMxeMfzCuhxBd9LRJSlFsBXelUCZuT-MDryeeFyqSqKinrXwj8HQfXM1Fob1jHVZstcRVEHhRaIvnnRssik4DT5FH3P8EwxIbNp7gVRMOqQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            </div> */}
            
           
            


<Slide  {...zoomOutProperties}>

        {
            images.map((each, index) => <img className="test12" key={index} src={each}></img>)
          }

       
        </Slide>




       
         

        </div>
    )
}
export default Animated