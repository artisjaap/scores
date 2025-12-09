package be.dev.scores.model.snooker;

import be.dev.scores.model.Spelverloop;
import lombok.Builder;

import java.util.List;

@Builder
public class SnookerSpelStats implements Spelverloop {

    private final List<SnookerDeelnemerStats> deelnemerStatsList;
    private final SnookerTafelStats tafelStats;

    public void verwerkPunten(int deelnemer, SnookerBal bal, PuntType punten){
        if(tafelStats.kanBalPotten(bal)) {
            tafelStats.potBal(bal);
            SnookerDeelnemerStats huidigeSpeler = zoekHuidigeDeelnemer(deelnemer);
            huidigeSpeler.registreerPunten(bal, punten);

        }else {
            throw new IllegalStateException("Bal niet meer op tafel " + bal);
        }

    }

    private SnookerDeelnemerStats zoekHuidigeDeelnemer(int deelnemer) {
        return deelnemerStatsList.stream()
                .filter(stats -> stats.getIndex() == deelnemer)
                .findFirst()
                .orElseThrow(() -> new IllegalStateException("Deelnemer niet gevonden"));

    }
}
