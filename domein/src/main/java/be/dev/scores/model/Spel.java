package be.dev.scores.model;

import lombok.Builder;

import java.util.List;

@Builder
public record Spel(int id, List<Speler> spelers, Sport sport) {
}
