import React from "react"
import Header from "./components/Header/Header.jsx";
import Features from "./components/Features/Features.jsx";
import Home from "./components/Home/Home.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Resume from "./components/Resume/Resume.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  )
}

export default App;