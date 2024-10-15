package be.dev.scores.repository;

import be.dev.scores.model.SpelEntiteit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpringDataJpaSpelRepository extends JpaRepository<SpelEntiteit, Integer> {


}
