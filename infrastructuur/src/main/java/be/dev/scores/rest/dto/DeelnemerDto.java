package be.dev.scores.rest.dto;

import lombok.Builder;

@Builder
public record DeelnemerDto (int order, SpelerDto speler){
}
