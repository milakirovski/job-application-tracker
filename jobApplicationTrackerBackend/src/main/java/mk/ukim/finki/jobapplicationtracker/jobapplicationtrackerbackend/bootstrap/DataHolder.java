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

            Job job4 = new Job(
                    "Data Analyst",
                    "IBM",
                    "Remote",
                    "Analyze and visualize business data.",
                    FieldOfInterest.INFORMATION_TECHNOLOGY,
                    PositionLevel.JUNIOR,
                    WorkMode.REMOTE,
                    WorkType.FULL_TIME,
                    new URL("https://www.ibm.com"),
                    JobStatus.NOT_APPLIED_YET,
                    LocalDateTime.now().minusDays(8),
                    LocalDateTime.now().minusDays(3),
                    LocalDateTime.now().minusDays(10),
                    LocalDateTime.now().plusDays(20)
            );

            Job job5 = new Job(
                    "UX Designer",
                    "Adobe",
                    "Vienna, Austria",
                    "Design intuitive user interfaces and experiences.",
                    FieldOfInterest.DESIGN,
                    PositionLevel.SENIOR,
                    WorkMode.HYBRID,
                    WorkType.FULL_TIME,
                    new URL("https://www.adobe.com"),
                    JobStatus.PENDING,
                    LocalDateTime.now().minusDays(12),
                    LocalDateTime.now().minusDays(2),
                    LocalDateTime.now().minusDays(15),
                    LocalDateTime.now().plusDays(25)
            );

            Job job6 = new Job(
                    "Mechanical Engineer Intern",
                    "Siemens",
                    "Munich, Germany",
                    "Assist in mechanical design and prototyping.",
                    FieldOfInterest.MECHANICAL_ENGINEERING,
                    PositionLevel.INTERN,
                    WorkMode.ON_SITE,
                    WorkType.INTERNSHIP,
                    new URL("https://www.siemens.com"),
                    JobStatus.NOT_APPLIED_YET,
                    LocalDateTime.now().minusDays(6),
                    LocalDateTime.now().minusDays(1),
                    LocalDateTime.now().minusDays(8),
                    LocalDateTime.now().plusDays(18)
            );

            Job job7 = new Job(
                    "Electrical Engineer",
                    "Tesla",
                    "Berlin, Germany",
                    "Develop electrical systems for EVs.",
                    FieldOfInterest.ELECTRICAL_ENGINEERING,
                    PositionLevel.JUNIOR,
                    WorkMode.ON_SITE,
                    WorkType.FULL_TIME,
                    new URL("https://www.tesla.com"),
                    JobStatus.SCHEDULED_1st_INTERVIEW,
                    LocalDateTime.now().minusDays(15),
                    LocalDateTime.now().minusDays(1),
                    LocalDateTime.now().minusDays(18),
                    LocalDateTime.now().plusDays(12)
            );

            Job job8 = new Job(
                    "Business Analyst",
                    "Deloitte",
                    "Skopje, North Macedonia",
                    "Evaluate business processes and propose improvements.",
                    FieldOfInterest.BUSINESS,
                    PositionLevel.JUNIOR,
                    WorkMode.HYBRID,
                    WorkType.FULL_TIME,
                    new URL("https://www2.deloitte.com"),
                    JobStatus.ACCEPTED,
                    LocalDateTime.now().minusDays(20),
                    LocalDateTime.now().minusDays(2),
                    LocalDateTime.now().minusDays(25),
                    LocalDateTime.now().plusDays(10)
            );

            Job job9 = new Job(
                    "Lawyer",
                    "Baker McKenzie",
                    "London, UK",
                    "Corporate law and client representation.",
                    FieldOfInterest.LAW,
                    PositionLevel.SENIOR,
                    WorkMode.ON_SITE,
                    WorkType.FULL_TIME,
                    new URL("https://www.bakermckenzie.com"),
                    JobStatus.REJECTED,
                    LocalDateTime.now().minusDays(30),
                    LocalDateTime.now().minusDays(5),
                    LocalDateTime.now().minusDays(35),
                    LocalDateTime.now().plusDays(5)
            );

            Job job10 = new Job(
                    "Medicine Researcher",
                    "Mayo Clinic",
                    "Rochester, USA",
                    "Conduct clinical research in oncology.",
                    FieldOfInterest.MEDICINE,
                    PositionLevel.LEAD,
                    WorkMode.ON_SITE,
                    WorkType.FULL_TIME,
                    new URL("https://www.mayoclinic.org"),
                    JobStatus.PENDING,
                    LocalDateTime.now().minusDays(18),
                    LocalDateTime.now().minusDays(1),
                    LocalDateTime.now().minusDays(20),
                    LocalDateTime.now().plusDays(15)
            );

            Job job11 = new Job(
                    "HR Specialist",
                    "Google",
                    "Dublin, Ireland",
                    "Manage recruitment and employee programs.",
                    FieldOfInterest.HUMAN_RESOURCES,
                    PositionLevel.JUNIOR,
                    WorkMode.HYBRID,
                    WorkType.FULL_TIME,
                    new URL("https://careers.google.com"),
                    JobStatus.NOT_APPLIED_YET,
                    LocalDateTime.now().minusDays(10),
                    LocalDateTime.now().minusDays(2),
                    LocalDateTime.now().minusDays(12),
                    LocalDateTime.now().plusDays(20)
            );

            Job job12 = new Job(
                    "Marketing Manager",
                    "Nike",
                    "Amsterdam, Netherlands",
                    "Lead marketing campaigns across EMEA.",
                    FieldOfInterest.MARKETING,
                    PositionLevel.MANAGER,
                    WorkMode.ON_SITE,
                    WorkType.FULL_TIME,
                    new URL("https://www.nike.com"),
                    JobStatus.SCHEDULED_2nd_INTERVIEW,
                    LocalDateTime.now().minusDays(22),
                    LocalDateTime.now().minusDays(1),
                    LocalDateTime.now().minusDays(25),
                    LocalDateTime.now().plusDays(10)
            );

            Job job13 = new Job(
                    "Education Coordinator",
                    "UNICEF",
                    "Remote",
                    "Coordinate education projects for children worldwide.",
                    FieldOfInterest.EDUCATION,
                    PositionLevel.SENIOR,
                    WorkMode.REMOTE,
                    WorkType.CONTRACT,
                    new URL("https://www.unicef.org"),
                    JobStatus.WITHDRAWN,
                    LocalDateTime.now().minusDays(25),
                    LocalDateTime.now().minusDays(2),
                    LocalDateTime.now().minusDays(30),
                    LocalDateTime.now().plusDays(5)
            );

            jobRepository.saveAll(List.of(
                    job1, job2, job3,
                    job4, job5, job6, job7, job8, job9, job10, job11, job12, job13
            ));
        }
    }
}
