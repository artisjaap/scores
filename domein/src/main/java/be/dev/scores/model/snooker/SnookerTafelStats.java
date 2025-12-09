package be.dev.scores.model.snooker;

import lombok.Builder;

@Builder
public class SnookerTafelStats {
    private SnookerBal hoogste;
    private int aantal;

    public int maxAantalPunten(){
        return switch (hoogste){
            case ROOD -> aantal*8+27;
            case GEEL -> 27;
            case GROEN -> 25;
            case BRUIN -> 22;
            case BLAUW -> 18;
            case ROZE -> 13;
            case ZWART -> aantal==1?7:0;
            default -> 0;
        };
    }

    public boolean kanBalPotten(SnookerBal bal) {
        return switch (bal) {
            case ROOD -> maxAantalPunten() > 27;
            case GEEL -> maxAantalPunten() > 25;
            case GROEN -> maxAantalPunten() > 22;
            case BRUIN -> maxAantalPunten() > 18;
            case BLAUW -> maxAantalPunten() > 13;
            case ROZE -> maxAantalPunten() > 7;
            case ZWART -> maxAantalPunten() > 0;
            default -> false;
        };
    }

    public void potBal(SnookerBal bal) {
         if(bal == SnookerBal.ROOD) {
             if(aantal > 0) {
                 aantal--;
             }else {
                 throw new IllegalStateException("Geen rode ballen meer op tafel");
             }
         }
         else if(hoogste == null){
             throw new IllegalStateException("Geen ballen meer op tafel");
         }
         else if(hoogste == bal) {
             hoogste = bal.getVolgende();
         }
    }

}
