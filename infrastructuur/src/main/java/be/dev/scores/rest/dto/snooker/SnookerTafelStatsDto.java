package be.dev.scores.rest.dto.snooker;

public record SnookerTafelStatsDto(int aantalRode,
                                   boolean heeftGeel, boolean heeftGroen, boolean heeftBruin,
                                   boolean heeftBlauw, boolean heeftRoze, boolean heeftZwart,
                                   int maxAantalPunten) {
}
