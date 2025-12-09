package be.dev.scores.model.snooker;

import lombok.Getter;

@Getter
public enum SnookerBal {
    ZWART(7, false, null),
    ROZE(6, false, ZWART),
    BLAUW(5, false, ROZE),
    BRUIN(4, false, BLAUW),
    GROEN(3, false, BRUIN),
    GEEL(2, false, GROEN),
    ROOD(1, false, GEEL),
    WIT(4, true, null);

    private final int waarde;
    private final boolean strafbal;
    private final SnookerBal volgende;

    SnookerBal(int waarde, boolean strafbal, SnookerBal volgende) {
        this.waarde = waarde;
        this.strafbal = strafbal;
        this.volgende = volgende;
    }
}
