package be.dev.scores.model;

import lombok.Builder;

@Builder
public record Sport(int id, String naam) {
}
