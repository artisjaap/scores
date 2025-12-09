package be.dev.scores.rest;

import be.dev.scores.acties.SnookerSpelActies;
import be.dev.scores.model.snooker.PuntType;
import be.dev.scores.model.snooker.SnookerBal;
import be.dev.scores.rest.dto.snooker.SpelverloopSnookerDto;
import be.dev.scores.rest.mappers.DefaultViewMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/spelverloop")
@RequiredArgsConstructor
public class SpelverloopController {
    private final DefaultViewMapper defaultViewMapper;
    private final SnookerSpelActies snookerSpelActies;

    @PatchMapping("{id}/SNOOKER/{speler}/{pot}")
    public @ResponseBody ResponseEntity<SpelverloopSnookerDto> potBall(@PathVariable int id, @PathVariable int speler, @PathVariable SnookerBal bal) {
        SpelverloopSnookerDto stats = defaultViewMapper.map(snookerSpelActies.voegPuntenToe(id, speler, bal, PuntType.PUNT), SpelverloopSnookerDto.class);
        return ResponseEntity.ok(stats);
    }
}
