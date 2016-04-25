var BolaBasket = (function () {
    function BolaBasket() {
    }
    BolaBasket.prototype.draw = function (game) {
        this.bola = game.add.sprite(game.world.centerX, game.world.centerY, 'basket');
        this.bola.anchor.setTo(0.5, 0.5);
        this.bola.scale.setTo(0.05, 0.05);
    };
    BolaBasket.prototype.getBenda = function () {
        return this.bola;
    };
    return BolaBasket;
})();
//# sourceMappingURL=BolaBasket.js.map