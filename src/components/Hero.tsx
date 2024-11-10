"use client";
import Image from "next/image"; // Correct import statement
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="container">
        
        <div className="hero-text-content">
          <p>HEY THERE!</p>
          <h1 className="hero-h1">I AM Azka Bano</h1>
          <p>
            Welcome to my website! I’m a frontend developer with a passion for
            creating responsive and visually appealing websites. Take a look at my work
            and skills, and let’s collaborate to build something amazing together.
          </p>
          <div className="buttons">
            <button className="hero-btn1">
              <Link href="/contact" className="hero-contact">
                Contact Me
              </Link>
            </button>
            <button className="hero-btn2">My Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}
