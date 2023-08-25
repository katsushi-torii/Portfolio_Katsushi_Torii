import React from 'react';
import mePhoto from "../../img/me.jpg";

function Hello(){
    return(
        <React.Fragment>
            <section className="hello show">
                <section className="left">
                    <figure>
                        <img src={mePhoto} alt="mePhoto"/>
                        <figcaption>
                            <h1>Katsushi Torii</h1>
                        </figcaption>
                    </figure>
                </section> 
                <section className="right">
                    <h2>Hello!</h2>
                    <article>
                        <p>
                            I came to Vancouver at the end of 2022 to take the web developing course in the Co-op program, with the goal of working as a web developer in Canada for 6 months. I took an year off from my university in Japan (Chiba University, Liberal Arts and Science).
                        </p>
                        <p>
                            I like learning new things. I want to absorb as much as I can during my stay in Canada. I work hard to complete my assigned tasks, always on time and as requested.
                        </p>
                    </article>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Hello;