package be.dev.scores.repository;

import be.dev.scores.model.SpelerEntiteit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringDataJpaSpelerRepository extends JpaRepository<SpelerEntiteit, Integer> {

}
