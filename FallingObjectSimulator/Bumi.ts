class Bumi implements Latar {
    private sky: Phaser.Sprite;
    private tanah: Phaser.Sprite;

    public draw(game: Phaser.Game): void {
        this.sky = game.add.sprite(game.world.centerX, game.world.centerY, 'bumisky');
        this.sky.anchor.setTo(0.5, 0.5);
        this.sky.scale.setTo(2, 2);
        this.tanah = game.add.sprite(0, game.world.height - 64, 'bumitanah');
        this.tanah.scale.setTo(2, 1);
    }

    public getSky(): Phaser.Sprite {
        return this.sky;
    }

    public getTanah(): Phaser.Sprite {
        return this.tanah;
    }
}