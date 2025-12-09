package be.dev.scores.rest.mappers;

import be.dev.scores.model.Deelnemer;
import be.dev.scores.rest.dto.DeelnemerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DeelnemerNaarDeelnemerDtoMapper implements Mapper<Deelnemer, DeelnemerDto> {
    private final SpelerNaarSpelerDtoMapper spelerMapper;

    @Override
    public DeelnemerDto map(Deelnemer deelnemer) {
        return DeelnemerDto.builder()
                .order(deelnemer.index())
                .speler(spelerMapper.map(deelnemer.speler()))
                .build();
    }
}
