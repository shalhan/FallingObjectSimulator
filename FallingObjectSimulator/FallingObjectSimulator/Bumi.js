var Bumi = (function () {
    function Bumi() {
    }
    Bumi.prototype.draw = function (game) {
        this.sky = game.add.sprite(game.world.centerX, game.world.centerY, 'bumisky');
        this.sky.anchor.setTo(0.5, 0.5);
        this.sky.scale.setTo(2, 2);
        this.tanah = game.add.sprite(0, game.world.height - 64, 'bumitanah');
        this.tanah.scale.setTo(2, 1);
    };
    Bumi.prototype.getSky = function () {
        return this.sky;
    };
    Bumi.prototype.getTanah = function () {
        return this.tanah;
    };
    return Bumi;
})();
//# sourceMappingURL=Bumi.js.map