package be.dev.scores.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SPORT")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SportEntiteit {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String naam;
}
