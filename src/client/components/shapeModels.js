/* eslint-disable no-magic-numbers */
export class Sqr {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

export class O {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new Sqr(this.row, this.col),
      new Sqr(this.row + 1, this.col),
      new Sqr(this.row, this.col + 1),
      new Sqr(this.row + 1, this.col + 1),
    ]
  }
}

export class L {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new Sqr(this.row, this.col),
      new Sqr(this.row + 1, this.col),
      new Sqr(this.row + 2, this.col),
      new Sqr(this.row + 2, this.col + 1),
    ]
  }
}

export class T {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new Sqr(this.row, this.col),
      new Sqr(this.row, this.col + 1),
      new Sqr(this.row, this.col + 2),
      new Sqr(this.row + 1, this.col + 1),
    ]
  }
}

export class I {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new Sqr(this.row, this.col),
      new Sqr(this.row + 1, this.col),
      new Sqr(this.row + 2, this.col),
      new Sqr(this.row + 3, this.col),
    ]
  }
}

export class S {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  squares() {
    return [
      new Sqr(this.row, this.col),
      new Sqr(this.row + 1, this.col),
      new Sqr(this.row + 1, this.col + 1),
      new Sqr(this.row + 2, this.col + 1),
    ]
  }
}
