package be.dev.scores.rest;

import be.dev.scores.acties.SportActies;
import be.dev.scores.rest.dto.SportDto;
import be.dev.scores.rest.mappers.DefaultViewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sport")
@RequiredArgsConstructor
public class SportController {
    private final DefaultViewMapper defaultViewMapper;
    private final SportActies sportActies;

    @GetMapping
    public @ResponseBody ResponseEntity<List<SportDto>> sporten() {
        List<SportDto> spelers = defaultViewMapper.map(sportActies.zoekAlleSporten(), SportDto.class);
        return ResponseEntity.ok(spelers);
    }
}
