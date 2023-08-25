import React from "react";

function Skills(){
    return(
        <React.Fragment>
            <section className="skill">
                <h2>Skills</h2>
                <section>
                    <h3>Web Developing</h3>
                    <ul>
                        <li><h4>HTML</h4></li>
                        <li><h4>CSS/SCSS</h4></li>
                        <li>
                            <h4>Javascript</h4>
                            <h5>JQuery, React, Vue</h5>
                        </li>
                        <li>
                            <h4>PHP</h4>
                            <h5>PHPmyAdmin</h5>
                        </li>
                    </ul>
                </section>
                <section>
                    <h3>Language</h3>
                    <ul>
                        <li><h4>English</h4></li>
                        <li><h4>Japanese</h4></li>
                    </ul>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Skills;