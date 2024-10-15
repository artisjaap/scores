package be.dev.scores.services;

import be.dev.scores.model.*;
import be.dev.scores.repository.SpelService;
import be.dev.scores.repository.SpringDataJpaSpelRepository;
import be.dev.scores.repository.SpringDataJpaSpelerRepository;
import be.dev.scores.repository.SpringDataJpaSportRepository;
import be.dev.scores.rest.mappers.DefaultViewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DefaultSpelService implements SpelService {
    private final SpringDataJpaSpelRepository spelRepository;
    private final SpringDataJpaSpelerRepository spelerRepository;
    private final SpringDataJpaSportRepository sportRepository;
    private final DefaultViewMapper mapper;

    public Spel bewaar(Spel spel) {
        List<Integer> spelers = spel.spelers().stream().map(Speler::id).toList();
        List<SpelerEntiteit> spelerEntities = spelerRepository.findAllById(spelers);
        SportEntiteit sportEntiteit = sportRepository.findById(spel.sport().id()).get();
        SpelEntiteit spelEntiteit = SpelEntiteit.builder()
                .spelers(spelerEntities)
                .sport(sportEntiteit)
                .build();

        SpelEntiteit save = spelRepository.save(spelEntiteit);

        return mapper.map(save, Spel.class);
    }

    public List<Spel> zoekAlleSpelen() {
        return spelRepository.findAll().stream().map(entity ->
                        Spel.builder()
                                .id(entity.getId())
                                .spelers(mapper.map(entity.getSpelers(), Speler.class))
                                .sport(mapper.map(entity.getSport(), Sport.class))
                                .build())
                .toList();
    }
}
