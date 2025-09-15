package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private LocalDateTime closeDate;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private LocalDateTime openDate;

    private JobStatus status;

}
