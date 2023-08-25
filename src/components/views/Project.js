import React from "react";

function Project(){
    return(
        <React.Fragment>
            <section className="project">
                <h2>Projects</h2>
                <section>
                    <h3>Vanbooking</h3>
                    <p>A pseudo room booking website in Vancouver. Created by PHP and MySQL.<a href="https://github.com/natttara/FinalProjectForMay">Check</a></p>
                </section>
                <section>
                    <h3>Karigui Marketplace</h3>
                    <p>A pseudo e-commerce website where users can buy and sell secondhand clothing. Created by Vue and PHP, MySQL. <a href="https://github.com/katsushi-torii/ClothingMarketplace">Check</a></p>
                </section>
                <section>
                    <h3>Bow-wow Sitter</h3>
                    <p>A pseudo dog/cat sitter booking website. Created by React. <a href="https://github.com/ayapan0811/FinalProject-JS2">Check</a></p>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Project;