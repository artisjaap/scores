package be.dev.scores.services;

import be.dev.scores.model.Sport;
import be.dev.scores.repository.SportService;
import be.dev.scores.repository.SpringDataJpaSportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DefaultSportService implements SportService {
    private final SpringDataJpaSportRepository sportRepository;

    @Override
    public List<Sport> zoekAlleSporten(){
        return sportRepository.findAll().stream().map(entiteit -> Sport.builder()
                .id(entiteit.getId())
                .naam(entiteit.getNaam())
                .build()).toList();
    }
}
