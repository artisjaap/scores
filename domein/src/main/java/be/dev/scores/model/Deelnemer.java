package be.dev.scores.model;

import lombok.Builder;

@Builder
public record Deelnemer(int index, Speler speler) {
}
