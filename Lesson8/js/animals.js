class Animal {
  constructor(src, width, height, x, y) {
    this._src = src;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
  }
  get src() {
    return this._src;
  }

  set src(src) {
    this._src = src;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }

  get x() {
    return this._x;
  }

  set x(x) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y) {
    this._y = y;
  }
}

class MC extends Animal {
  constructor(src, width, height, x, y) {
    super(src, width, height, x, y);
    this._isMain = true;
  }

  get isMain() {
    return this._isMain;
  }

  set isMain(isMain) {
    this._isMain = isMain;
  }
}

class Enemy extends Animal {
  constructor(src, width, height, x, y) {
    super(src, width, height, x, y);
    this._isEnemy = true;
  }

  get isEnemy() {
    return this._isEnemy;
  }

  set isEnemy(isEnemy) {
    this._isEnemy = isEnemy;
  }
}
