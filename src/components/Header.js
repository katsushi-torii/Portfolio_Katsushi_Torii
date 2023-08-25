import React from "react";

class Header extends React.Component {

    show = (e) => {
        document.getElementsByClassName('show')[0].classList.remove('show');
        document.getElementsByClassName(`${e.target.id}`)[0].classList.add('show');
    }

    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><button id="hello" onClick={this.show}>Home</button></li>
                        <li><button id="skill" onClick={this.show}>Skills</button></li>
                        <li><button id="work" onClick={this.show}>Work / Internship experience</button></li>
                        <li><button id="school" onClick={this.show}>Academic background</button></li>
                        <li><button id="project" onClick={this.show}>Past projects</button></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;