var Bulan = (function () {
    function Bulan() {
    }
    Bulan.prototype.draw = function (game) {
        this.sky = game.add.sprite(game.world.centerX, game.world.centerY, 'bulansky');
        this.sky.anchor.setTo(0.5, 0.5);
        this.tanah = game.add.sprite(0, game.world.height - 64, 'bulantanah');
    };
    Bulan.prototype.getSky = function () {
        return this.sky;
    };
    Bulan.prototype.getTanah = function () {
        return this.tanah;
    };
    return Bulan;
})();
//# sourceMappingURL=Bulan.js.map