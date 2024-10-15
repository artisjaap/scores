package be.dev.scores.rest.mappers;

import be.dev.scores.model.Speler;
import be.dev.scores.rest.dto.DeelnemerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SpelerNaarDeelnemerDtoMapper implements Mapper<Speler, DeelnemerDto>{
    private final SpelerNaarSpelerDtoMapper spelerMapper;

    @Override
    public DeelnemerDto map(Speler speler) {
        return DeelnemerDto.builder()
                .speler(spelerMapper.map(speler))
                .build();
    }
}
