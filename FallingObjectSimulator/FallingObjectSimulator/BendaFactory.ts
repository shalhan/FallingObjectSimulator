class BendaFactory extends AbstractFactory{

    public getBenda(namaBenda: String): Benda{
        alert("hello");
        if (namaBenda == null) {
            return null;
        }
        else if (namaBenda == "Meteor") {
            return new Meteor();
        } else if (namaBenda == "BolaBasket") {
            return new BolaBasket();
        } else if (namaBenda == "BolaTenis") {
            return new BolaTenis();
        }
        
        return null;      
    }
    
    public getLatar(namaLatar: String): Latar {
        return null;
    }    
}