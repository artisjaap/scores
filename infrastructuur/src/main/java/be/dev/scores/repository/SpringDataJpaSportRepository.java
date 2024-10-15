package be.dev.scores.repository;

import be.dev.scores.model.SportEntiteit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringDataJpaSportRepository extends JpaRepository<SportEntiteit, Integer> {


}
