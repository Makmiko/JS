let bg = new PlayGround(900, 600, "#9999ff", 0, 0);
bg.fillCanv();
bg.canvas.style.margin = "50px 19vw";
let tiger = new MC("tiger.png", 128, 128, 0, 0);
let rabbit = new Enemy(
  "rabbit.png",
  128,
  128,
  bg.fieldRand(900),
  bg.fieldRand(600)
);
bg.drawImg(tiger);
bg.drawImg(rabbit);
document.addEventListener("keydown", bg.move.bind(bg, tiger));
document.addEventListener("keydown", bg.drawImg.bind(bg, rabbit));
document.addEventListener("keydown", bg.pop.bind(bg, rabbit, tiger));
