package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JobApplicationTrackerBackendApplication {

    public static void main(String[] args) {

        // Load environment variables from .env file
        Dotenv.load();
        SpringApplication.run(JobApplicationTrackerBackendApplication.class, args);
    }

}
