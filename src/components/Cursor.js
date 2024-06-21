// CustomCursor.js
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import './Cursor.css'; // Import CSS for custom cursor

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const width = 25; // Width of dots
  const amount = 20; // Number of dots
  const sineDots = Math.floor(0.5 * amount); // Number of sine wave dots

  // Array to store Dot instances
  let dots = [];

  // Dot class
  class Dot {
    constructor(index) {
      this.index = index;
      this.anglespeed = 0.05;
      this.x = 0;
      this.y = 0;
      this.scale = 1 - 0.05 * index;
      this.range = width / 2 - (width / 2) * this.scale + 2;
      this.limit = 0.75 * width * this.scale;
    }

    lock() {
      this.lockX = this.x;
      this.lockY = this.y;
      this.angleX = 2 * Math.PI * Math.random();
      this.angleY = 2 * Math.PI * Math.random();
    }

    draw(idle) {
      if (!idle || this.index <= sineDots) {
        gsap.set(this.element, {
          x: this.x,
          y: this.y,
        });
      } else {
        this.angleX += this.anglespeed;
        this.angleY += this.anglespeed;
        this.y = this.lockY + Math.sin(this.angleY) * this.range;
        this.x = this.lockX + Math.sin(this.angleX) * this.range;
        gsap.set(this.element, {
          x: this.x,
          y: this.y,
        });
      }
    }

    createDOMElement(cursorRef) {
      this.element = document.createElement('span');
      gsap.set(this.element, {
        scale: this.scale,
      });
      cursorRef.appendChild(this.element);
    }
  }

  // Initialize dots on mount
  useEffect(() => {
    const cursorRef = document.getElementById('ink-cursor');

    // Build dots array
    for (let i = 0; i < amount; i++) {
      const dot = new Dot(i);
      dot.createDOMElement(cursorRef);
      dots.push(dot);
    }

    // Event listeners for mousemove and touchmove
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX - width / 2, y: clientY - width / 2 });
      resetIdleTimer();
    };

    const onTouchMove = (event) => {
      const { touches } = event;
      if (touches.length > 0) {
        const { clientX, clientY } = touches[0];
        setMousePosition({ x: clientX - width / 2, y: clientY - width / 2 });
        resetIdleTimer();
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Function to reset idle timer
  const resetIdleTimer = () => {
    clearTimeout(timeoutID);
    startIdleTimer();
  };

  // Variables for idle timeout
  let timeoutID;
  const idleTimeout = 150;
  let idle = false;

  // Function to start idle timer
  const startIdleTimer = () => {
    timeoutID = setTimeout(goInactive, idleTimeout);
    idle = false;
  };

  // Function to go inactive (lock dots)
  const goInactive = () => {
    idle = true;
    for (let dot of dots) {
      dot.lock();
    }
  };

  // Function to render dots on each frame
  const render = (timestamp) => {
    positionCursor(timestamp - lastFrame);
    lastFrame = timestamp;
    requestAnimationFrame(render);
  };

  // Variables for rendering and animation
  let lastFrame = 0;
  const positionCursor = (e) => {
    let t = mousePosition.x;
    let i = mousePosition.y;
    dots.forEach((dot, s, n) => {
      const h = n[s + 1] || n[0];
      if (!idle || s <= sineDots) {
        const e = 0.35 * (h.x - dot.x);
        const s = 0.35 * (h.y - dot.y);
        t += e;
        i += s;
      }
      dot.x = t;
      dot.y = i;
      dot.draw(e);
    });
  };

  return (
    <div id="ink-cursor" className="ink-cursor">
      {dots.map((dot, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};

export default CustomCursor;
