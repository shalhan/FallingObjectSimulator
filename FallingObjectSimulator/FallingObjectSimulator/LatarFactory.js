var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LatarFactory = (function (_super) {
    __extends(LatarFactory, _super);
    function LatarFactory() {
        _super.apply(this, arguments);
    }
    LatarFactory.prototype.getBenda = function (namaBenda) {
        return null;
    };
    LatarFactory.prototype.getLatar = function (namaLatar) {
        if (namaLatar == null) {
            return null;
        }
        else if (namaLatar == "Bulan") {
            return new Bulan();
        }
        else if (namaLatar == "Bumi") {
            return new Bumi();
        }
        else if (namaLatar == "Mars") {
            return new Mars();
        }
        return null;
    };
    return LatarFactory;
})(AbstractFactory);
//# sourceMappingURL=LatarFactory.js.map