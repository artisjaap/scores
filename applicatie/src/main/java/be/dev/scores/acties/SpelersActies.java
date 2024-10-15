package be.dev.scores.acties;

import be.dev.scores.model.Speler;
import be.dev.scores.repository.SpelerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class SpelersActies {
    private final SpelerService spelerRepository;

    public Speler voegSpelerToe(Speler speler){
        return spelerRepository.bewaar(speler);
    }

    public List<Speler> zoekAlleSpelers() {
        return spelerRepository.zoekAlleSpelers();
    }
}
