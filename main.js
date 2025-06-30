// Preloader Animation
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hero Animation
const planets = [
      { name: "Mercury", radius: 40, speed: 0.04, size: 4, color: "gray" },
      { name: "Venus", radius: 60, speed: 0.03, size: 5, color: "goldenrod" },
      { name: "Earth", radius: 80, speed: 0.02, size: 6, color: "deepskyblue" },
      { name: "Mars", radius: 100, speed: 0.018, size: 5, color: "orangered" },
      { name: "Jupiter", radius: 130, speed: 0.015, size: 10, color: "saddlebrown" },
      { name: "Saturn", radius: 160, speed: 0.012, size: 9, color: "khaki" },
      { name: "Uranus", radius: 190, speed: 0.01, size: 8, color: "lightblue" },
      { name: "Neptune", radius: 220, speed: 0.008, size: 8, color: "dodgerblue" },
      { name: "Pluto", radius: 250, speed: 0.006, size: 3, color: "white" }
    ];

    const container = document.getElementById("kepler-animation");

    planets.forEach(p => {
      const planet = document.createElement("div");
      planet.classList.add("planet");
      planet.style.width = `${p.size}px`;
      planet.style.height = `${p.size}px`;
      planet.style.background = p.color;
      planet.style.borderRadius = "50%";
      planet.style.position = "absolute";
      planet.dataset.radius = p.radius;
      planet.dataset.angle = Math.random() * Math.PI * 2;
      planet.dataset.speed = p.speed;
      container.appendChild(planet);
    });

    function animate() {
      const planets = document.querySelectorAll(".planet");
      planets.forEach(p => {
        let r = parseFloat(p.dataset.radius);
        let a = parseFloat(p.dataset.angle);
        let s = parseFloat(p.dataset.speed);
        a += s;
        let x = Math.cos(a) * r + window.innerWidth / 2;
        let y = Math.sin(a) * r + window.innerHeight / 2;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.dataset.angle = a;
      });
      requestAnimationFrame(animate);
    }

    animate();

// Starfield background
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      ctx.arc(x, y, Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
