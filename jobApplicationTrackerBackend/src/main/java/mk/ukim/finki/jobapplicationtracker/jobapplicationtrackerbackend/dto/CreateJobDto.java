package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto;

import jakarta.validation.constraints.NotNull;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import lombok.Data;
import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;


@Data
public class CreateJobDto {
    
    private String title;
    
    @NotBlank(message = "Company is required")
    private String company;
    
    @NotBlank(message = "Location is required")
    private String location;
    
    private String description;
    
    @NotNull(message = "Field of interest is required")
    private FieldOfInterest fieldOfInterest;

    @NotNull(message = "Position level is required")
    private PositionLevel position;

    @NotNull(message = "Work mode is required")
    private WorkMode workMode;

    @NotNull(message = "Work type is required")
    private WorkType workType;

    private String companyWebsite;

//    @JsonFormat(pattern = "dd.MM.yyyy HH:mm") // za test so postman
    private LocalDateTime openDate;

//    @JsonFormat(pattern = "dd.MM.yyyy HH:mm") //// za test so postman
    private LocalDateTime closeDate;

    private JobStatus status;
}
