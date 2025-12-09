package be.dev.scores.model.snooker;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class SnookerDeelnemerStats {
    private int index;
    private int score;
    private boolean inBreak;
    private final SnookerDeelnemerScoreHistoriek scoreHistoriek = SnookerDeelnemerScoreHistoriek.initHistoriek();

    public void registreerPunten(SnookerBal bal, PuntType punten) {
        if(punten == PuntType.PUNT) {
            score += bal.getWaarde();
            inBreak = true;
            scoreHistoriek.voegHistoriekToe(
                    SnookerDeelnemerScoreHistoriekLijn.builder()
                            .type(punten)
                            .timestamp(LocalDateTime.now())
                            .bal(bal)
                            .resetBreak(false)
                            .build()

            );

        }
    }
}
