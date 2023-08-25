import React from "react";

function Academic(){
    return(
        <React.Fragment>
            <section className="school">
                <h2>Academic Background</h2>
                <section>
                    <article>
                        <h3>Tamwood Careers (Vancouver, Canada)</h3>
                        <h4>Jan 2023 ~ July 2023</h4>
                    </article>
                    <h4>Web Developer Course (COOP)</h4>
                </section>
                <section>
                    <article>
                        <h3>Chiba University (Chiba, Japan)</h3>
                        <h4>April 2020 ~ (Taking a year off)</h4>
                    </article>
                    <h4>Liberal Arts and Science</h4>
                </section>
                <section>
                    <article>
                        <h3>Tama High School (Kanagawa, Japan)</h3>
                        <h4>April 2017 ~ March 2020</h4>
                    </article>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Academic;