import React from "react";
import "./index.css";
import Navbar from "./components/navBar";
import Hero from "./components/hero";
import Icons from "./components/icons";
import About from "./components/about";
import Project from "./components/projects";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Icons />
      <About />
      <Project />
    </main>
  );
}
