package be.dev.scores.rest.dto;

import lombok.Builder;

import java.util.List;

@Builder
public record SpelDto(int id, List<DeelnemerDto> deelnemers, SportDto sport) {
}
