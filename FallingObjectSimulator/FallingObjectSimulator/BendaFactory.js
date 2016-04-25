var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BendaFactory = (function (_super) {
    __extends(BendaFactory, _super);
    function BendaFactory() {
        _super.apply(this, arguments);
    }
    BendaFactory.prototype.getBenda = function (namaBenda) {
        alert("hello");
        if (namaBenda == null) {
            return null;
        }
        else if (namaBenda == "Meteor") {
            return new Meteor();
        }
        else if (namaBenda == "BolaBasket") {
            return new BolaBasket();
        }
        else if (namaBenda == "BolaTenis") {
            return new BolaTenis();
        }
        return null;
    };
    BendaFactory.prototype.getLatar = function (namaLatar) {
        return null;
    };
    return BendaFactory;
})(AbstractFactory);
//# sourceMappingURL=BendaFactory.js.map