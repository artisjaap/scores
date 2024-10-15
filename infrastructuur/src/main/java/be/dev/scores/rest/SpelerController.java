package be.dev.scores.rest;

import be.dev.scores.acties.SpelersActies;
import be.dev.scores.model.Speler;
import be.dev.scores.rest.dto.NieuweSpelerDto;
import be.dev.scores.rest.dto.SpelerDto;
import be.dev.scores.rest.mappers.DefaultViewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/speler")
@RequiredArgsConstructor
public class SpelerController {

    private final DefaultViewMapper defaultViewMapper;
    private final SpelersActies spelersActies;

    @PostMapping()
    public @ResponseBody ResponseEntity<SpelerDto> maakSpeler(NieuweSpelerDto speler) {
        Speler spelerAangemaakt = spelersActies.voegSpelerToe(defaultViewMapper.map(speler, Speler.class));
        return ResponseEntity.ok(defaultViewMapper.map(spelerAangemaakt, SpelerDto.class));
    }

    @GetMapping
    public @ResponseBody ResponseEntity<List<SpelerDto>> spelers() {
        List<SpelerDto> spelers = defaultViewMapper.map(spelersActies.zoekAlleSpelers(), SpelerDto.class);
        return ResponseEntity.ok(spelers);
    }
}
