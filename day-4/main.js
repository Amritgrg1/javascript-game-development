const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticle = 20;
let colors = ['red','yellow','green','blue','orange','black'];
let randomColor = colors[Math.floor(Math.random()*colors.length)];


class Particle {
  constructor() {
    this.x = Math.random() * (300 - 0) + 0;
    this.y = Math.random() * (300 - 0) + 0;
    this.r = 20;
    this.color = randomColor;
  }

  drawParticle() {
    c.beginPath();
    c.fillStyle = randomColor || "red";
    c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    c.fill();
  }

  move() {
    this.x += Math.random() * (2 - -2) + -2;
    this.y += Math.random() * (2 - -2) + -2;
  }
}


const particleArr = [];
for (let i = 0; i < totalParticle; i++) {
  const obj = new Particle();
  particleArr.push(obj);
}

function update() {
  c.clearRect(0, 0, 300, 300);

  for (let i = 0; i < totalParticle; i++) {
    particleArr[i].drawParticle();
    particleArr[i].move();
  }

  requestAnimationFrame(update);
}

update();
