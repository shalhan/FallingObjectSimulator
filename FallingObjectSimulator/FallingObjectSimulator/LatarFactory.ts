class LatarFactory extends AbstractFactory {
    public getBenda(namaBenda: String): Benda {
        return null;
    }

    public getLatar(namaLatar: String): Latar {
        if (namaLatar == null) {
            return null;
        }
        else if (namaLatar == "Bulan") {
            return new Bulan();
        } else if (namaLatar == "Bumi") {
            return new Bumi();
        } else if (namaLatar == "Mars"){ 
            return new Mars();
        }

        return null;    
    }
}