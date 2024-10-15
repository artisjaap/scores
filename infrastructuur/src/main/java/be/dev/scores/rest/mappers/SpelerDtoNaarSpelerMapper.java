package be.dev.scores.rest.mappers;

import be.dev.scores.model.Speler;
import be.dev.scores.rest.dto.SpelerDto;
import org.springframework.stereotype.Component;

@Component
public class SpelerDtoNaarSpelerMapper  implements Mapper<SpelerDto, Speler> {
    @Override
    public Speler map(SpelerDto spelerDto) {
        return Speler.builder()
                .id(spelerDto.id())
                .naam(spelerDto.name())
                .build();
    }
}
