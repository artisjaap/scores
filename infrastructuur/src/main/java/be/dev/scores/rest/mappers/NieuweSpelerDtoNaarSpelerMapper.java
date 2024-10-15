package be.dev.scores.rest.mappers;

import be.dev.scores.model.Speler;
import be.dev.scores.rest.dto.NieuweSpelerDto;
import org.springframework.stereotype.Component;

@Component
public class NieuweSpelerDtoNaarSpelerMapper implements Mapper<NieuweSpelerDto, Speler> {
    @Override
    public Speler map(NieuweSpelerDto nieuweSpelerDto) {
        return Speler.builder()
                .naam(nieuweSpelerDto.naam())
                .build();
    }
}
