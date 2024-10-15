package be.dev.scores.rest.dto;

import lombok.Builder;

@Builder
public record SportDto(int id, String naam) {
}
