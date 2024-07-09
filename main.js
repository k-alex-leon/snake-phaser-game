import "./style.css";
import Phaser from "phaser";

const config = {
  type: Phaser.CANVAS,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      // height : 1000,
    },
  },
  scene: {
    preload,
    create,
    upload,
  },
  // using a custom canvas
  canvas: document.getElementById("gameScene"),
};

const game = new Phaser.Game(config);

let snake;
// DIRECTIONS
let UP = 0;
let DOWN = 1;
let LEFT = 2;
let RIGHT = 3;

let apple;

function preload() {
  this.load.image("snake", "/green-square.png");
  this.load.image("apple", "/apple.png");
}

function create() {
  snake = this.physics.add.image(
    game.canvas.width * 0.5,
    game.canvas.height * 0.5,
    "snake"
  );
  snake.setDisplaySize(30, 16);
}

function upload() {}
