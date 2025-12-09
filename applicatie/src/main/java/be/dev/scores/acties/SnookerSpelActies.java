package be.dev.scores.acties;

import be.dev.scores.model.Spel;
import be.dev.scores.model.Spelverloop;
import be.dev.scores.model.snooker.PuntType;
import be.dev.scores.model.snooker.SnookerBal;
import be.dev.scores.model.snooker.SnookerSpelStats;
import be.dev.scores.repository.SnookerSpelRepository;
import be.dev.scores.repository.SpelService;
import org.springframework.stereotype.Component;

@Component
public class SnookerSpelActies {
    private SnookerSpelRepository snookerSpelRepository;
    private SpelService spelService;


    public SnookerSpelStats voegPuntenToe(int id, int speler, SnookerBal bal, PuntType puntenType) {
        Spel spel = spelService.findById(id);
        Spelverloop spelverloop = spel.spelverloop();

        switch(spelverloop) {
            case SnookerSpelStats snooker -> snooker.verwerkPunten(speler, bal, puntenType);
            default -> throw new IllegalStateException("Unexpected value: " + spelverloop);
        }

        return SnookerSpelStats.builder().build();

    }


}
