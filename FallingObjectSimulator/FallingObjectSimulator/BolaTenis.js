var BolaTenis = (function () {
    function BolaTenis() {
    }
    BolaTenis.prototype.draw = function (game) {
        this.bolaT = game.add.sprite(game.world.centerX, game.world.centerY, 'tenis');
        this.bolaT.anchor.setTo(0.5, 0.5);
        this.bolaT.scale.setTo(0.05, 0.05);
    };
    BolaTenis.prototype.getBenda = function () {
        return this.bolaT;
    };
    return BolaTenis;
})();
//# sourceMappingURL=BolaTenis.js.map