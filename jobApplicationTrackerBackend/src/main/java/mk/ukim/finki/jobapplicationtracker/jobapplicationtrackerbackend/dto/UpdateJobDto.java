package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto;

import com.mongodb.annotations.Immutable;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Immutable
public class UpdateJobDto {

    private String title;

    private String company;

    private String location;

    private String description;

    private FieldOfInterest fieldOfInterest;

    private PositionLevel position;

    private WorkMode workMode;

    private WorkType workType;

    private String companyWebsite;

//    @JsonFormat(pattern = "dd.MM.yyyy HH:mm") //test for postman
    private LocalDateTime closeDate;

//    @JsonFormat(pattern = "dd.MM.yyyy HH:mm") ////test for postman
    private LocalDateTime openDate;

    private JobStatus status;

}
