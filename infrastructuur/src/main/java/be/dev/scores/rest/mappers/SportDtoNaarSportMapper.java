package be.dev.scores.rest.mappers;

import be.dev.scores.model.Sport;
import be.dev.scores.rest.dto.SportDto;
import org.springframework.stereotype.Component;

@Component
public class SportDtoNaarSportMapper  implements Mapper<SportDto, Sport> {
    @Override
    public Sport map(SportDto sportDto) {
        return Sport.builder()
                .id(sportDto.id())
                .naam(sportDto.naam())
                .build();
    }
}
