class BolaTenis implements Benda {
    private bolaT: Phaser.Sprite;

    public draw(game: Phaser.Game): void {
        this.bolaT = game.add.sprite(game.world.centerX, game.world.centerY, 'tenis');
        this.bolaT.anchor.setTo(0.5, 0.5);
        this.bolaT.scale.setTo(0.05, 0.05);
    }
    public getBenda(): Phaser.Sprite {
        return this.bolaT;
    }    
}