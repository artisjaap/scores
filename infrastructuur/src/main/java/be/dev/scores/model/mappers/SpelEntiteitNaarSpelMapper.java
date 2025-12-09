package be.dev.scores.model.mappers;

import be.dev.scores.model.Spel;
import be.dev.scores.model.SpelEntiteit;
import be.dev.scores.rest.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SpelEntiteitNaarSpelMapper implements Mapper<SpelEntiteit, Spel> {
    private final SportEntiteitNaarSportMapper sportMapper;
    private final DeelnemerEntiteitNaarDeelnemerMapper deelnemerMapper;

    @Override
    public Spel map(SpelEntiteit spelEntiteit) {
        return Spel.builder()
                .sport(sportMapper.map(spelEntiteit.getSport()))
                .deelnemers(deelnemerMapper.mapList(spelEntiteit.getDeelnemers()))
                .build();
    }
}
