"use client";
import Image from "next/image";

export default function About() {


  return (
    <section className="section">
      <h1 className="h1">About Me</h1>
      <div className="about">
        
        <div className="about-text">
          <p>
          Hi! I'm Azka Bano, a frontend web developer who loves 
          creating websites that are both beautifuland easy to use.
           I bring together creativity and technical skills to make sure 
           each project looks greatand works smoothly. I focus on clean
            and modern design to give users the best experience.       
          </p>

          <p>
          I design each website with careful attention to detail, 
          ensuring it’s responsive and performs well on any device.
           My goal is to turn ideas into engaging, impactful online experiences
            that make a strong impression in today’s competitive digital world.
          </p>
          <div className="skills">
            <div className="skill-item">
              <h5>HTML & CSS</h5>
              <div className="html-css"></div>
            </div>
            <div className="skill-item">
              <h5>JavaScript</h5>
              <div className="js"></div>
            </div>
            <div className="skill-item"> 
              <h5>TypeScript</h5>
              <div className="ts"></div>
            </div>
            <div className="skill-item">
              <h5>React JS</h5>
              <div className="react-js"></div>
            </div>
            <div className="skill-item">
              <h5>Next JS</h5>
              <div className="next-js"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}