package be.dev.scores.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "SPEL")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SpelEntiteit {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToMany
    @JoinTable(name = "SPEL_SPELER", joinColumns = @JoinColumn(name = "SPEL_ID"), inverseJoinColumns = @JoinColumn(name = "SPELER_ID"))
    private List<SpelerEntiteit> spelers;

    @ManyToOne
    @JoinColumn(name = "SPORT_ID")
    private SportEntiteit sport;
}
