class BolaBasket implements Benda {
    private bola: Phaser.Sprite;

    public draw(game: Phaser.Game): void {
        this.bola = game.add.sprite(game.world.centerX, game.world.centerY, 'basket');
        this.bola.anchor.setTo(0.5, 0.5);
        this.bola.scale.setTo(0.05, 0.05);
    }    

    public getBenda(): Phaser.Sprite {
        return this.bola;
    }
}