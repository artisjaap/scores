package be.dev.scores.model.snooker;

import lombok.Builder;

import java.util.ArrayList;
import java.util.List;

@Builder
public record SnookerDeelnemerScoreHistoriek(List<SnookerDeelnemerScoreHistoriekLijn> historiekLijnList) {
    public static SnookerDeelnemerScoreHistoriek initHistoriek() {
        return SnookerDeelnemerScoreHistoriek.builder().historiekLijnList(new ArrayList<>()).build();
    }

    public void voegHistoriekToe(SnookerDeelnemerScoreHistoriekLijn historiek) {
        this.historiekLijnList.add(historiek);
    }
}
