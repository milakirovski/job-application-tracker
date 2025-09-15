package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URL;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "jobs")
public class Job {

    @Id
    private String id;
    private String title;
    private String company;
    private String location;
    private String description;
    private FieldOfInterest fieldOfInterest;
    private PositionLevel position;
    private WorkMode workMode;
    private WorkType workType;
    private URL companyWebsite;
    private JobStatus status;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;

    public Job(String title, String company, String location, String description, FieldOfInterest fieldOfInterest, PositionLevel position, WorkMode workMode, WorkType workType, URL companyWebsite, JobStatus status, LocalDateTime createdAt, LocalDateTime updatedAt, LocalDateTime openDate, LocalDateTime closeDate) {
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
        this.fieldOfInterest = fieldOfInterest;
        this.position = position;
        this.workMode = workMode;
        this.workType = workType;
        this.companyWebsite = companyWebsite;

        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.openDate = openDate;
        this.closeDate = closeDate;
        this.status = status;
    }
}
