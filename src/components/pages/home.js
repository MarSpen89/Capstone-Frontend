// This page will render a Log in button if your not logged in, upon clicking will lead you to a login page.
// If you're logged in, it will render a Log out button with your email address.

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.scss";

const Home = ({ loggedIn, email }) => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const onButtonClick = () => {
    // Update this function later
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const drawFlames = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = [];

    for (let i = 0; i < 5; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        speed: Math.random() * 5 + 1,
        size: Math.random() * 5 + 5,
        life: Math.random() * 30 + 50,
      });
    }

    for (const p of particles) {
      ctx.fillStyle = `rgba(0, 0, 255, ${p.life / 100})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      particles[i].y -= particles[i].speed;
      particles[i].life--;

      if (particles[i].life <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(drawFlames);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    resizeCanvas();
    drawFlames();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="mainContainer">
      <canvas ref={canvasRef} id="flameCanvas"></canvas>
      <div className="titleContainer">
        <div>Welcome Back!</div>
      </div>
      <div>This is the home page.</div>
      <div className="buttonContainer">
        <input
          className="inputButton"
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? "Log out" : "Log in"}
        />
        {loggedIn && <div>Your email address is {email}</div>}
      </div>
    </div>
  );
};

export default Home;