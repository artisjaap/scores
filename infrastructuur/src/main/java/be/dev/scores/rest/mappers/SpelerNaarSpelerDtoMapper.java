package be.dev.scores.rest.mappers;

import be.dev.scores.model.Speler;
import be.dev.scores.rest.dto.SpelerDto;
import org.springframework.stereotype.Component;

@Component
public class SpelerNaarSpelerDtoMapper implements Mapper<Speler, SpelerDto> {
    @Override
    public SpelerDto map(Speler speler) {
        return SpelerDto.builder()
                .id(speler.id())
                .name(speler.naam())
                .build();
    }
}
