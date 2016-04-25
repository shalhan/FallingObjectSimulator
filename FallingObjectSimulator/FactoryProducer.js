var FactoryProducer = (function () {
    function FactoryProducer() {
    }
    FactoryProducer.getFactory = function (pilihan) {
        if (pilihan == "Benda") {
            return new BendaFactory();
        }
        else if (pilihan == "Latar") {
            return new LatarFactory();
        }
        return null;
    };
    return FactoryProducer;
})();
//# sourceMappingURL=FactoryProducer.js.map