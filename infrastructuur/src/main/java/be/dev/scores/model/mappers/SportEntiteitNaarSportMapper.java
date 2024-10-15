package be.dev.scores.model.mappers;

import be.dev.scores.model.Sport;
import be.dev.scores.model.SportEntiteit;
import be.dev.scores.rest.mappers.Mapper;
import org.springframework.stereotype.Component;

@Component
public class SportEntiteitNaarSportMapper implements Mapper<SportEntiteit, Sport> {
    @Override
    public Sport map(SportEntiteit sportEntiteit) {
        return Sport.builder()
                .id(sportEntiteit.getId())
                .naam(sportEntiteit.getNaam())
                .build();
    }
}
