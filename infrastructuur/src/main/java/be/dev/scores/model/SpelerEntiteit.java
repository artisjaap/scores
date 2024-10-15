package be.dev.scores.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SPELER")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SpelerEntiteit {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 50, name = "NAME")
    private String name;
}
