const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Ball {
  constructor() {
    this.x = Math.random() * (400 - 0) + 0;
    this.y = Math.random() * (400 - 0) + 0;
    this.x_speed = 1;
    this.y_speed = 1;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.arc(this.x, this.y, 30, 0, 360);
    c.fill();
  }
  move() {
    this.x += this.x_speed;
    this.y += this.y_speed;
  }

  checkCollision() {
    if(this.x > canvas.width - 20) {
        this.x_speed -= 1;
    }

    else if(this.x < 0) {
        this.x_speed += 1;
    }

    else if(this.y > canvas.height) {
        this.y_speed -= 1;
    }

    else if(this.y < 0) {
        this.y_speed += 1;
    }
  }
}

const obj = new Ball();

function animate() {
    c.clearRect(0,0,400,400);
  obj.draw();
  obj.move();
  obj.checkCollision();
  window.requestAnimationFrame(animate);
}

animate();
