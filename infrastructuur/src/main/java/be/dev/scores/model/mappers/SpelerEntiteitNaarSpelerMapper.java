package be.dev.scores.model.mappers;

import be.dev.scores.model.Speler;
import be.dev.scores.model.SpelerEntiteit;
import be.dev.scores.rest.mappers.Mapper;
import org.springframework.stereotype.Component;

@Component
public class SpelerEntiteitNaarSpelerMapper implements Mapper<SpelerEntiteit, Speler> {
    @Override
    public Speler map(SpelerEntiteit spelerEntiteit) {
        return Speler.builder()
                .id(spelerEntiteit.getId())
                .naam(spelerEntiteit.getName())
                .build();
    }
}
