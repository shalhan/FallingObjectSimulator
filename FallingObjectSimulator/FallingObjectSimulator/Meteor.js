var Meteor = (function () {
    function Meteor() {
    }
    Meteor.prototype.draw = function (game) {
        this.meteor = game.add.sprite(game.world.centerX, game.world.centerY, 'meteor');
        this.meteor.anchor.setTo(0.5, 0.5);
        this.meteor.scale.setTo(0.05, 0.05);
    };
    Meteor.prototype.getBenda = function () {
        return this.meteor;
    };
    return Meteor;
})();
//# sourceMappingURL=Meteor.js.map