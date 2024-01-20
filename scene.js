class MyScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  init(data) {
    // happens once, flows top to bottom
    // can receive data when adding/starting new scene
  }

  preload() {
    // happens once, flows top to bottom
  }

  create(data) {
    // happens once, flows top to bottom
    // can receive data when adding/starting new scene
  }

  update(time, delta) {
    // happens EVERY FRAME, flows top to bottom
    // automatically receives time/delta parameters
  }
}
