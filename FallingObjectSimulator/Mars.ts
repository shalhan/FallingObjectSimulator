class Mars implements Latar {
    private sky: Phaser.Sprite;
    private tanah: Phaser.Sprite;

    public draw(game: Phaser.Game): void {
        this.sky = game.add.sprite(game.world.centerX, game.world.centerY, 'marssky');
        this.sky.anchor.setTo(0.5, 0.5);
        this.tanah = game.add.sprite(0, game.world.height - 64, 'marstanah');
        
    }

    public getSky(): Phaser.Sprite {
        return this.sky;
    }

    public getTanah(): Phaser.Sprite {
        return this.tanah;
    }
}