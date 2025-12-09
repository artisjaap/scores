package be.dev.scores.acties;

import be.dev.scores.model.*;
import be.dev.scores.repository.SpelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class SpelActies {
    private final SpelService spelRepository;

    public Spel registreerNieuwSpel(List<Speler> spelers, Sport sport) {
        SpelAanvraag spel = SpelAanvraag.builder()
                .sport(sport)
                .spelers(spelers)
                .build();
        return spelRepository.bewaar(spel);
    }

    public List<Spel<Spelverloop>> zoekAlleSpelen(){
        return spelRepository.zoekAlleSpelen();
    }
}
