package be.dev.scores.model;

import lombok.Builder;

import java.util.List;
import java.util.Optional;

@Builder
public record Spel<S extends Spelverloop>(int id, List<Deelnemer> deelnemers, Sport sport, S spelverloop) {
    public S spelStats() {

        return spelverloop;
    }
}
