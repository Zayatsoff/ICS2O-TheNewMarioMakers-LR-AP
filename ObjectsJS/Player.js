class Player {
  constructor() {
    this.w = 100;
    this.h = 100;
    this.y = height - this.h;
    this.x = width / 2;


    this.gravity = 0.6;
    this.velocity = 0;
    this.jumpForce = -15;
    this.speed = 4;
    this.ground = height - this.h;
    this.jumped = false;

    this.r1 = random(0, 255)
    this.r2 = random(0, 255)
    this.r3 = random(0, 255)

  }
  display() {

    image(OurChar, this.x, this.y, this.w, this.h)
  }

  jump() {
    this.velocity += this.jumpForce;
  }

  update() {

    if (this.velocity < -20) {
      this.velocity += 4
    }
    this.velocity += this.gravity;

    this.y += this.velocity;

    // ground detection (?)
    if (this.y > this.ground) {
      this.y = this.ground;
      this.velocity = 0;
    }
    if (keyIsPressed === false) {
      this.speed = 4
    }

    // sides detection
    if (this.x <= 15) {
      this.speed = -1.5;

    }

    if (this.x >= width - 30) {
      this.speed = -1.5;
    }

    if (this.x <= 15) {
      this.x = 20;
    }

    if (this.x >= width - 35) {
      this.x = width - 40;
    }


  }

  rightMovement() {
    this.x += this.speed;
    if (keyIsDown(68)) {
      this.speed += 0.1;
    } else {
      this.speed = 4
    }
  }

  leftMovement() {
    this.x -= this.speed;
    if (keyIsDown(65)) {
      this.speed += 0.1;
    } else {
      this.speed = 4
    }
  }



  // playerTouch() {
  //   if (player.x <= 27 || this.x >= width - 50) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  CollidePlat(i) {
    var collidePlat = collideRectRect(this.x, this.y, this.w, this.h, plat[i].x, plat[i].y, plat[i].w, plat[i].h - this.h);
    if (collidePlat) {
      this.velocity = 0;
      this.y = plat[i].y - this.h;
    }

  }

  CollideCoin(i) {
    var collideCoin = collideRectRect(this.x, this.y, this.w, this.h, coin[i].x, coin[i].y, coin[i].r-20, coin[i].r-20);

    if (collideCoin) {
      coin[i].visible = false;
      money += coin[i].price;
    }

  }
}
//////////////////////////////
