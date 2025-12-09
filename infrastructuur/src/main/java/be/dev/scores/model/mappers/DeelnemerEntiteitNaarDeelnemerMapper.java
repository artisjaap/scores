package be.dev.scores.model.mappers;

import be.dev.scores.model.Deelnemer;
import be.dev.scores.model.DeelnemerEntiteit;
import be.dev.scores.rest.mappers.Mapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DeelnemerEntiteitNaarDeelnemerMapper implements Mapper<DeelnemerEntiteit, Deelnemer> {

    private final SpelerEntiteitNaarSpelerMapper spelerMapper;

    @Override
    public Deelnemer map(DeelnemerEntiteit deelnemerEntiteit) {
        return Deelnemer.builder()
                .speler(spelerMapper.map(deelnemerEntiteit.getSpeler()))
                .index(deelnemerEntiteit.getIndex())
                .build();
    }
}