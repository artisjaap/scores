package be.dev.scores.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "DEELNEMER")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DeelnemerEntiteit {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int index;

    @ManyToOne
    @JoinColumn(name = "SPELER_ID")
    private SpelerEntiteit speler;
}
