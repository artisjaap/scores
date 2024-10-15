package be.dev.scores.model;

import lombok.Builder;

@Builder
public record Speler(int id, String naam) {
}
