package be.dev.scores.rest.mappers;

import be.dev.scores.model.Sport;
import be.dev.scores.rest.dto.SportDto;
import org.springframework.stereotype.Component;

@Component
public class SportNaarSportDtoMapper implements Mapper<Sport, SportDto> {
    @Override
    public SportDto map(Sport sportDto) {
        return SportDto.builder()
                .id(sportDto.id())
                .naam(sportDto.naam())
                .build();
    }
}
