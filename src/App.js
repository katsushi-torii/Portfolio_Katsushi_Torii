import React from "react";
import Hello from "./components/views/Hello";
import Work from "./components/views/Work";
import Academic from "./components/views/Academic";
import Project from "./components/views/Project";
import Skills from "./components/views/Skills";

class App extends React.Component {

  left = () =>{
    if(document.getElementsByClassName('hello')[0].classList.contains('show')){
      document.getElementsByClassName('hello')[0].classList.remove('show');
      document.getElementsByClassName('project')[0].classList.add('show');
    }else{
      document.getElementsByClassName('show')[0].previousElementSibling.classList.add('show');
      document.getElementsByClassName('show')[1].classList.remove('show');
    }
  }

  right = ()=>{
    if(document.getElementsByClassName('project')[0].classList.contains('show')){
      document.getElementsByClassName('project')[0].classList.remove('show');
      document.getElementsByClassName('hello')[0].classList.add('show');
    }else{
      document.getElementsByClassName('show')[0].nextElementSibling.classList.add('show');
      document.getElementsByClassName('show')[0].classList.remove('show');
    }
  }

  render() {
    return (   
      <main>
          <article>
              <button onClick={this.left}>◀</button>
          </article>
          <section>
              <Hello/>
              <Skills/>
              <Work/>
              <Academic/>
              <Project/>
          </section>
          <article>
              <button onClick={this.right}>▶</button>
          </article>
      </main>
    );
  }
}


export default App;
