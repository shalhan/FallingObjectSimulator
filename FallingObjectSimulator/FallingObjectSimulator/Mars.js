var Mars = (function () {
    function Mars() {
    }
    Mars.prototype.draw = function (game) {
        this.sky = game.add.sprite(game.world.centerX, game.world.centerY, 'marssky');
        this.sky.anchor.setTo(0.5, 0.5);
        this.tanah = game.add.sprite(0, game.world.height - 64, 'marstanah');
    };
    Mars.prototype.getSky = function () {
        return this.sky;
    };
    Mars.prototype.getTanah = function () {
        return this.tanah;
    };
    return Mars;
})();
//# sourceMappingURL=Mars.js.map