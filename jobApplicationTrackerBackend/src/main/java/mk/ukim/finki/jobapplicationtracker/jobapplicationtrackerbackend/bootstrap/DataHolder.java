package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.bootstrap;

import jakarta.annotation.PostConstruct;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.Job;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.repository.JobRepository;
import org.springframework.stereotype.Component;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataHolder {

    public final JobRepository jobRepository;

    public DataHolder(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @PostConstruct
    public void init() throws MalformedURLException {
        if (jobRepository.count() == 0) {

            Job job1 = new Job(
                    "Junior Java Developer",
                    "Endava",
                    "Skopje, North Macedonia",
                    "Develop and maintain Java Spring Boot applications.",
                    FieldOfInterest.INFORMATION_TECHNOLOGY,
                    PositionLevel.JUNIOR,
                    WorkMode.HYBRID,
                    WorkType.FULL_TIME,
                    new URL("https://www.endava.com"),
                    JobStatus.NOT_APPLIED_YET,
                    LocalDateTime.now().minusDays(10),
                    LocalDateTime.now().minusDays(2),
                    LocalDateTime.now().minusDays(15),
                    LocalDateTime.now().plusDays(15)
            );

            Job job2 = new Job(
                    "Marketing Intern",
                    "Coca-Cola",
                    "Remote",
                    "Assist in digital marketing campaigns and analytics.",
                    FieldOfInterest.MARKETING,
                    PositionLevel.INTERN,
                    WorkMode.REMOTE,
                    WorkType.INTERNSHIP,
                    new URL("https://www.coca-cola.com"),
                    JobStatus.PENDING,
                    LocalDateTime.now().minusDays(5),
                    LocalDateTime.now(),
                    LocalDateTime.now().minusDays(7),
                    LocalDateTime.now().plusDays(30)
            );

            Job job3 = new Job(
                    "HR Manager",
                    "Microsoft",
                    "Vienna, Austria",
                    "Lead HR operations and talent acquisition.",
                    FieldOfInterest.HUMAN_RESOURCES,
                    PositionLevel.MANAGER,
                    WorkMode.ON_SITE,
                    WorkType.FULL_TIME,
                    new URL("https://www.microsoft.com"),
                    JobStatus.SCHEDULED_1st_INTERVIEW,
                    LocalDateTime.now().minusDays(20),
                    LocalDateTime.now().minusDays(1),
                    LocalDateTime.now().minusDays(25),
                    LocalDateTime.now().plusDays(10)
            );

            jobRepository.saveAll(List.of(job1, job2, job3));
        }
    }
}
