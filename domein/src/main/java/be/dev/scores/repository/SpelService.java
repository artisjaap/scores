package be.dev.scores.repository;

import be.dev.scores.model.Spel;
import be.dev.scores.model.SpelAanvraag;
import be.dev.scores.model.Spelverloop;

import java.util.List;

public interface SpelService {
    Spel bewaar(SpelAanvraag spel);

    List<Spel<Spelverloop>> zoekAlleSpelen();

    Spel findById(int id);
}
