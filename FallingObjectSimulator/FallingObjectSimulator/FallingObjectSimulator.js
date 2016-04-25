var FallingObjectSimulator = (function () {
    function FallingObjectSimulator() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, update: this.update });
    }
    FallingObjectSimulator.prototype.preload = function () {
        this.game.load.image('logo', 'phaser-logo-small.png');
    };
    FallingObjectSimulator.prototype.create = function () {
        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5, 0.5);
    };
    FallingObjectSimulator.prototype.update = function () {
    };
    return FallingObjectSimulator;
})();
//# sourceMappingURL=FallingObjectSimulator.js.map