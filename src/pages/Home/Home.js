import React from "react";
import "./styles.css"
import Carousel from "../../components/carousel/carousel"

function Home () {
    return (
        <div>
            <div className="header">
                <h1 className="name" style={{  fontFamily: 'Bebas Neue', float: 'left' }}>DeffoDelish</h1>
            </div>
            <div className="slides">
                <Carousel />

            </div>
        </div>
    )
}

export default Home;