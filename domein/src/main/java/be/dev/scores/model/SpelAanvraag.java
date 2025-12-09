package be.dev.scores.model;

import lombok.Builder;

import java.util.List;

@Builder
public record SpelAanvraag(List<Speler> spelers, Sport sport) {
}