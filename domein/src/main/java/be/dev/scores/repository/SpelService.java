package be.dev.scores.repository;

import be.dev.scores.model.Spel;

import java.util.List;

public interface SpelService {
    Spel bewaar(Spel spel);

    List<Spel> zoekAlleSpelen();
}
