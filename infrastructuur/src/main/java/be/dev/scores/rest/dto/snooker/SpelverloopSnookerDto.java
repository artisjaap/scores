package be.dev.scores.rest.dto.snooker;

import java.util.List;

public record SpelverloopSnookerDto(List<DeelnemerSnookerScoreDto> deelnemers, SnookerTafelStatsDto stats) {

}
