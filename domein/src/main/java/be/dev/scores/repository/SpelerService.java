package be.dev.scores.repository;

import be.dev.scores.model.Speler;

import java.util.List;

public interface SpelerService {
    Speler bewaar(Speler speler);

    List<Speler> zoekAlleSpelers();
}
