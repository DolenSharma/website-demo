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
const canvas = document.getElementById('orbitCanvas');
const ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Sun position (focus of the ellipse)
const sunX = width / 2 - 80;
const sunY = height / 2;

// Orbit parameters (ellipse)
const a = 180; // semi-major axis
const b = 100; // semi-minor axis

let angle = 0;

function drawOrbit() {
  ctx.clearRect(0, 0, width, height);

  // Draw ellipse (orbit path)
  ctx.beginPath();
  ctx.ellipse(sunX + 80, sunY, a, b, 0, 0, 2 * Math.PI);
  ctx.strokeStyle = "#444";
  ctx.lineWidth = 1;
  ctx.stroke();

  // Draw sun
  ctx.beginPath();
  ctx.arc(sunX, sunY, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Calculate planet position on ellipse
  const x = sunX + 80 + a * Math.cos(angle);
  const y = sunY + b * Math.sin(angle);

  // Draw planet
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, 2 * Math.PI);
  ctx.fillStyle = "deepskyblue";
  ctx.fill();

  // Speed varies: closer to sun = faster (Kepler's 2nd law)
  const distance = Math.hypot(x - sunX, y - sunY);
  angle += 0.008 + (0.3 / distance);

  requestAnimationFrame(drawOrbit);
}

drawOrbit();
