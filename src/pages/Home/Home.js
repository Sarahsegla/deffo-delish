import React from "react";
import "./styles.css"
import Carousel from "../../components/carousel/carousel"
import Jumbo from "../../components/jumbo/jumbo";

function Home () {
    return (
        <div>
             <div className="subhead" style={{ paddingTop: '70px', paddingLeft: '50px', fontSize: '30px'}}>
                <h2 style={{display: 'inline'}}> 
                <span id="we">We</span> Don't Cook, <span id="we">We</span> Eat.</h2>
             </div>
            <header className="header">
           <Jumbo/>
            </header>
            <article>
            <div className="about" style={{textAlign: 'left', paddingTop: '100px', paddingBottom: '100px', paddingLeft: '50px'}}> 
            <p>
                    Food and Travel Blogger.
                    <br></br>
                    Food From All Over the World.
                    {/* <br></br>
                    Any Suggestion of Restaurants? */}
                    </p>
                </div>
            </article>
            <div className="slides">
                <Carousel />
                </div>
        </div>
    )
}

export default Home;