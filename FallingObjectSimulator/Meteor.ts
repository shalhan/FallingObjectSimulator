class Meteor implements Benda {
    private meteor: Phaser.Sprite;

    public draw(game: Phaser.Game): void{
        this.meteor = game.add.sprite(game.world.centerX, game.world.centerY, 'meteor');
        this.meteor.anchor.setTo(0.5, 0.5);
        this.meteor.scale.setTo(0.05, 0.05);
    }       

    public getBenda(): Phaser.Sprite {
        return this.meteor;
    }
}