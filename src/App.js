import React from "react";
import "./App.scss";
import Skills from "./components/skills";
import Intro from "./components/intro"
import Portfolio from "./components/portfolio";
import Blog from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer"

const App=()=> {
  return (
    <div className="App">
      <Intro/>
      <Skills/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
