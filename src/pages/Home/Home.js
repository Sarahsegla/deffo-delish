import React from "react";
import "./styles.css"
import Carousel from "../../components/carousel/carousel"

function Home () {
    return (
        <div>
            <div className="header">
                <h1 className="name" style={{  fontFamily: 'Bebas Neue', float: 'left', padding: '10px' }}>DeffoDelish</h1>
            </div>
            <article>
                <div className="about" style={{textAlign: 'left'}}>
                    Food and Travel Blogger.
                    Food From All Over the World.
                    Any Suggestion of Restaurants?
                </div>
            </article>
            <div className="slides">
                <Carousel />
                </div>
        </div>
    )
}

export default Home;