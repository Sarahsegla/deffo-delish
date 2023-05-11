import React from "react";
import { useEffect } from "react";
import "./styles.css";
// import Carousel from "../../components/carousel/carousel";
import Jumbo from "../../components/jumbo/jumbo";
import Suggestion from "../../components/suggestion/suggestion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Overlay from "../../components/overlay/overlay";

function Home () {
    useEffect(()=> {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div>
             <div className="subhead" style={{ paddingTop: '70px', paddingLeft: '50px', fontSize: '30px'}}>
                <h2 style={{display: 'inline'}}> 
                <span id="we">We</span> Don't Cook, <span id="we">We</span> Eat.</h2>
             </div>
            <header className="header" data-aos="fade-up" >
           <Jumbo/>
            </header>
            <article>
            <div className="about" data-aos="fade-up-right" style={{textAlign: 'left', paddingTop: '80px', paddingBottom: '10px', paddingLeft: '50px', fontSize: '30px'}}> 
            <h3>
                    Food and Travel Blogger.
                    <br></br>
                    Food From All Over the World.
                   </h3>
                </div>
            </article>
            <div className="slides" style={{paddingBottom: '220px', backgroundColor: '#5072A7'}}>
                {/* <Carousel/> */}
                <Overlay />
                </div>
            <div className="suggest" style={{paddingBottom: '60px'}}>

                
                <Suggestion/>
            </div>
        </div>
    )
}

export default Home;