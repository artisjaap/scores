package be.dev.scores;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

import java.util.Collections;
import java.util.Map;


@SpringBootApplication
public class ScoresApplication {
    public static final String APPLICATION_NAME = "scores";

    public static void main(String[] args) {

            new SpringApplicationBuilder(ScoresApplication.class)
                    .sources(ScoresApplication.class)
                    .properties(applicationProperties())
                    .run(args);
        }

        public static Map<String, Object> applicationProperties() {
            return Collections.singletonMap("spring.config.name", APPLICATION_NAME);
        }


}

