package be.dev.scores.services;

import be.dev.scores.model.Speler;
import be.dev.scores.model.SpelerEntiteit;
import be.dev.scores.repository.SpelerService;
import be.dev.scores.repository.SpringDataJpaSpelerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DefaultSpelerService implements SpelerService {
    private final SpringDataJpaSpelerRepository spelerService;

    @Override
    public Speler bewaar(Speler speler) {
        SpelerEntiteit entiteit = spelerService.save(SpelerEntiteit.builder()
                .name(speler.naam())
                .id(speler.id())
                .build());
        return new Speler(entiteit.getId(), entiteit.getName());
    }

    @Override
    public List<Speler> zoekAlleSpelers() {
        final List<SpelerEntiteit> entiteits = spelerService.findAll();
        return entiteits.stream().map(entity -> Speler.builder().naam(entity.getName()).id(entity.getId()).build()).toList();
    }

}
