var game = new Phaser.Game(1280, 720, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

	//background preload
	game.load.image('background', 'assets/images/aqua_ocean.jpg')
	//preload asset
    game.load.image('blank', 'assets/images/WhiteCard.png');

}

function create() {

	//background
	game.add.sprite(0,0, 'background');

	//display new sprite on the screen
    game.add.sprite(650, 380, 'blank');
    game.add.sprite(350,380, 'blank')
}