package be.dev.scores.acties;

import be.dev.scores.model.Sport;
import be.dev.scores.repository.SportService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class SportActies {
    private final SportService sportRepository;

    public List<Sport> zoekAlleSporten() {
        return sportRepository.zoekAlleSporten();
    }
}
