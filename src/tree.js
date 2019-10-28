import Ecosystem from './ecosystem';


class Tree {
  constructor(ctx, backgroundHeight, backgroundWidth) {
    this.image = new Image();
    this.image.src = '../assets/images/deciduous-tree.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
  }


  draw(backgroundWidth, backgroundHeight, backgroundTop) {

    let ratio = window.innerWidth * 0.00006;
    let height = this.image.height * ratio;
    let width = this.image.width * ratio;
    let bottom = (backgroundHeight * 0.74) + backgroundTop;
    let top = bottom - height;

    this.ctx.drawImage(this.image, window.innerWidth * 0.4, top, width, height);

    // this.ctx.beginPath();
    // this.ctx.rect(window.innerWidth * 0.4, bottom, 200, 100)
    // this.ctx.fill();
  }

  animate() {
    if (this.width > 230) {
      this.increment = -0.5;
    }
    if (this.width < 200) {
      this.increment = 0.5;
    }
    this.width += this.increment;
    this.height += this.increment;
    this.pos[0] -= (this.increment / 2);
    this.pos[1] -= (this.increment / 2);
  }

}

export default Tree;