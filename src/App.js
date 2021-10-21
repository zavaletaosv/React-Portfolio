import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Switch, BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
  <BrowserRouter>
    <main className="text-gray-400 bg-gray-900 body-font max-h-screen"> 
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </main>
  </BrowserRouter>
    );
}
