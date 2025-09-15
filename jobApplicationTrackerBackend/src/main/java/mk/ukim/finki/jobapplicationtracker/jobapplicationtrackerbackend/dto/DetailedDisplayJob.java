package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto;

import com.mongodb.annotations.Immutable;
import lombok.AllArgsConstructor;
import lombok.Data;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;

import java.net.URL;
import java.time.LocalDateTime;

@Immutable
@Data
@AllArgsConstructor
public class DetailedDisplayJob {
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

    private LocalDateTime updatedAt;
    private LocalDateTime openDate;
    private LocalDateTime closeDate;


}
