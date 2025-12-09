package be.dev.scores.rest.dto.snooker;

import be.dev.scores.rest.dto.DeelnemerDto;

public record DeelnemerSnookerScoreDto(DeelnemerDto deelnemerDto, int score, int hoogsteBreak, int huidigeBreak) {
}
