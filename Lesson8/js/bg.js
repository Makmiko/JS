class PlayGround {
  constructor(width, height, color, offsetX = 0, offsetY = 0) {
    this._canvas = document.getElementsByTagName("canvas")[0];
    this._canvas.width = width;
    this._canvas.height = height;
    this._ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = color;
    this._offsetX = offsetX;
    this._offsetY = offsetY;
    this._points = 0;
  }
  get points() {
    return this._points;
  }

  set points(points) {
    this._points = points;
  }

  fillCanv() {
    this.ctx.fillRect(
      this.offsetX,
      this.offsetY,
      this.canvas.width,
      this.canvas.height
    );
  }
  drawImg(obj) {
    let img = new Image();
    img.src = obj.src;
    img.onload = () =>
      this.ctx.drawImage(img, obj.x, obj.y, obj.width, obj.height);
  }
  fieldRand(max) {
    return Math.floor(Math.random() * (max - 128));
  }
  move(obj, event) {
    switch (event.code) {
      case "KeyD":
        obj.x += 64;
        this.fillCanv();
        this.drawImg(obj);
        break;
      case "KeyS":
        obj.y += 64;
        this.fillCanv();
        this.drawImg(obj);
        break;
      case "KeyA":
        obj.x -= 64;
        this.fillCanv();
        this.drawImg(obj);
        break;
      case "KeyW":
        obj.y -= 64;
        this.fillCanv();
        this.drawImg(obj);
        break;
      default:
        break;
    }
  }
  pop(obj1, obj2) {
    if (
      obj1.x >= obj2.x - 64 &&
      obj1.x <= obj2.x + 64 &&
      obj1.y >= obj2.y - 64 &&
      obj1.y <= obj2.y + 64
    ) {
      obj1.x = this.fieldRand(900);
      obj1.y = this.fieldRand(600);
      this.points += 1;
      console.log(this.points);
    }
  }

  get canvas() {
    return this._canvas;
  }
  get ctx() {
    return this._ctx;
  }
  get offsetX() {
    return this._offsetX;
  }
  get offsetY() {
    return this._offsetY;
  }
  set canvas(canvas) {
    this._canvas = canvas;
  }
  set ctx(ctx) {
    this._cts = ctx;
  }
  set offsetX(x) {
    this._offsetX = x;
  }
  set offsetY(y) {
    this._offsetY = y;
  }
}
