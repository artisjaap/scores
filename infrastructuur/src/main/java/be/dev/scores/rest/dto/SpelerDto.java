package be.dev.scores.rest.dto;

import lombok.Builder;

@Builder
public record SpelerDto(int id, String name) {
}
