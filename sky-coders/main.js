const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("character", "assets/character.png");
}

function create() {
  this.add.image(400, 300, "sky");
  this.character = this.physics.add.sprite(100, 450, "character");
  this.character.setCollideWorldBounds(true);

  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.cursors.left.isDown) {
    this.character.setVelocityX(-160);
  } else if (this.cursors.right.isDown) {
    this.character.setVelocityX(160);
  } else {
    this.character.setVelocityX(0);
  }

  if (this.cursors.up.isDown && this.character.body.touching.down) {
    this.character.setVelocityY(-330);
  }
}
