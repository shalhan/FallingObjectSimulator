var FallingObjectSimulator = (function () {
    function FallingObjectSimulator() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create, preload: this.preload, update: this.update });
    }
    FallingObjectSimulator.prototype.preload = function () {
        //Image
        //Benda
        this.game.load.image('basket', 'assets/bola_basket.png');
        this.game.load.image('tenis', 'assets/bola_tenis.png');
        this.game.load.image('meteor', 'assets/meteor.png');
        //Langit
        this.game.load.image('bulansky', 'assets/bulan_sky.png');
        this.game.load.image('bulantanah', 'assets/bulan_tanah.png');
        this.game.load.image('bumisky', 'assets/bumi_sky.png');
        this.game.load.image('bumitanah', 'assets/bumi_tanah.png');
        this.game.load.image('marssky', 'assets/mars_sky.png');
        this.game.load.image('marstanah', 'assets/mars_tanah.png');
    };
    FallingObjectSimulator.prototype.create = function () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //latar
        this.latarFactory = FactoryProducer.getFactory("Latar");
        this.latar = this.latarFactory.getLatar("Bumi");
        this.latar.draw(this.game);
        //benda
        this.bendaFactory = FactoryProducer.getFactory("Benda");
        this.object = this.bendaFactory.getBenda("BolaBasket");
        this.object.draw(this.game);
        //efek benda
        this.game.physics.enable([this.object.getBenda(), this.latar.getTanah()], Phaser.Physics.ARCADE);
        /*this.object.getBenda().body.velocity.setTo(200, 200);
        this.object.getBenda().body.collideWorldBounds = true;
        this.object.getBenda().body.bounce.set(1);
      */
        this.game.physics.arcade.gravity.y = 9800;
        this.object.getBenda().body.bounce.y = 0.9;
        this.object.getBenda().body.collideWorldBounds = true;
        this.latar.getTanah().body.allowGravity = false;
        this.latar.getTanah().body.immovable = true;
    };
    FallingObjectSimulator.prototype.update = function () {
        this.game.physics.arcade.collide(this.object.getBenda(), this.latar.getTanah());
    };
    return FallingObjectSimulator;
})();
window.onload = function () {
    var playGame = new FallingObjectSimulator();
};
//# sourceMappingURL=app.js.map