package be.dev.scores.model.snooker;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record SnookerDeelnemerScoreHistoriekLijn(LocalDateTime timestamp, PuntType type, SnookerBal bal, boolean resetBreak) {
}
