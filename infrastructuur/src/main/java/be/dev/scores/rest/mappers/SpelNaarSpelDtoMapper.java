package be.dev.scores.rest.mappers;

import be.dev.scores.model.Spel;
import be.dev.scores.rest.dto.SpelDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SpelNaarSpelDtoMapper implements Mapper<Spel, SpelDto> {
    private final SportNaarSportDtoMapper sportMapper;
    private final DeelnemerNaarDeelnemerDtoMapper deelnemerMapper;

    @Override
    public SpelDto map(Spel spel) {
        return SpelDto.builder()
                .id(spel.id())
                .sport(sportMapper.map(spel.sport()))
                .deelnemers(deelnemerMapper.mapList(spel.deelnemers()))
                .build();
    }
}
