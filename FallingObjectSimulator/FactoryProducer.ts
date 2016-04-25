class FactoryProducer {
    public static getFactory(pilihan: String): AbstractFactory {
        if (pilihan == "Benda") {
            return new BendaFactory();
        } else if (pilihan == "Latar") {
            return new LatarFactory();
        }
        return null;
    }
}