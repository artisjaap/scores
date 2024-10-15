package be.dev.scores.acties;

import be.dev.scores.model.Spel;
import be.dev.scores.model.Speler;
import be.dev.scores.model.Sport;
import be.dev.scores.repository.SpelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class SpelActies {
    private final SpelService spelRepository;

    public Spel registreerNieuwSpel(List<Speler> spelers, Sport sport) {
        Spel spel = Spel.builder()
                .sport(sport)
                .spelers(spelers)
                .build();
        return spelRepository.bewaar(spel);
    }

    public List<Spel> zoekAlleSpelen(){
        return spelRepository.zoekAlleSpelen();
    }
}
