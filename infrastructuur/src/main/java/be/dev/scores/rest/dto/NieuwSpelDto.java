package be.dev.scores.rest.dto;

import java.util.List;

public record NieuwSpelDto(List<SpelerDto> spelers, SportDto sport) {
}
