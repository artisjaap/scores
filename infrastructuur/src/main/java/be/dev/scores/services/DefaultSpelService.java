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

    public Spel bewaar(SpelAanvraag spel) {
        List<Integer> spelers = spel.spelers().stream().map(Speler::id).toList();
        List<DeelnemerEntiteit> spelerEntities = spelerRepository.findAllById(spelers)
                .stream()
                .map(speler -> DeelnemerEntiteit.builder().speler(speler).build())
                .toList();
        SportEntiteit sportEntiteit = sportRepository.findById(spel.sport().id()).get();
        SpelEntiteit spelEntiteit = SpelEntiteit.builder()
                .deelnemers(spelerEntities)
                .sport(sportEntiteit)
                .build();

        SpelEntiteit save = spelRepository.save(spelEntiteit);

        return mapper.map(save, Spel.class);
    }

    public List<Spel<Spelverloop>> zoekAlleSpelen() {
        return spelRepository.findAll().stream().map(entity ->
                        Spel.builder()
                                .id(entity.getId())
                                .deelnemers(mapper.map(entity.getDeelnemers(), Deelnemer.class))
                                .sport(mapper.map(entity.getSport(), Sport.class))
                                .build())
                .toList();
    }

    @Override
    public Spel findById(int id) {
        return spelRepository.findById(id)
                .map(entity -> mapper.map(entity, Spel.class))
                .orElseThrow(() -> new IllegalStateException());
    }
}
