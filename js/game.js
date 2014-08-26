var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

	//preload asset
    game.load.image('blank', 'assets/images/WhiteCard.png');

}

function create() {

	//display new sprite on the screen
    game.add.sprite(0, 0, 'blank');

}