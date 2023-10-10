const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const snowDrops = 400;

class Drop{
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.r = Math.random() * 8.5;
        this.v = Math.random()  * 1.5;
    }

    make() {
        c.fillStyle = "#fff";
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI  * 2);
        c.fill();
        c.closePath();
        
        this.y += this.v;
    }
}

canvas.addEventListener("click", (e) => {
    x = e.clientX;
    y = e.clientY;
})

let drops = [];
for(let i = 0; i < snowDrops; i++) drops.push(new Drop());


function animate() {
    c.fillStyle = "rgba(0, 0, 0, 0.5)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    drops.forEach(drop => drop.make());

    window.requestAnimationFrame(animate);
}

animate();