package be.dev.scores.rest;

import be.dev.scores.acties.SpelActies;
import be.dev.scores.model.Spel;
import be.dev.scores.model.Speler;
import be.dev.scores.model.Spelverloop;
import be.dev.scores.model.Sport;
import be.dev.scores.rest.dto.NieuwSpelDto;
import be.dev.scores.rest.dto.SpelDto;
import be.dev.scores.rest.mappers.DefaultViewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/spel")
@RequiredArgsConstructor
public class SpelController {
    private final DefaultViewMapper mapper;
    private final SpelActies spelActies;

    @GetMapping
    public @ResponseBody ResponseEntity<List<SpelDto>> alleSpelen() {
        List<Spel<Spelverloop>> spelen = spelActies.zoekAlleSpelen();
        return ResponseEntity.ok(mapper.map(spelen, SpelDto.class));
    }

    @PostMapping
    public @ResponseBody ResponseEntity<SpelDto> registreerNieuwSpel(@RequestBody NieuwSpelDto nieuwSpel) {
        List<Speler> spelers = mapper.map(nieuwSpel.spelers(), Speler.class);
        Sport sport = mapper.map(nieuwSpel.sport(), Sport.class);
        SpelDto spel = mapper.map(spelActies.registreerNieuwSpel(spelers, sport), SpelDto.class);
        return ResponseEntity.ok(spel);
    }
}
