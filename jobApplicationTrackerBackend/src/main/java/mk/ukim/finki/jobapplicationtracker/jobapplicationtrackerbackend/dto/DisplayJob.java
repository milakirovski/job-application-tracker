package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mongodb.annotations.Immutable;
import lombok.AllArgsConstructor;
import lombok.Data;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.Job;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import java.time.LocalDateTime;
import java.util.List;

@Immutable
@Data
@AllArgsConstructor
public class DisplayJob {
    private String title;

    private String company;

    private String location;

    private PositionLevel position;

    private WorkMode workMode;

    private WorkType workType;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private LocalDateTime openDate;

    @JsonFormat(pattern = "dd.MM.yyyy HH:mm")
    private LocalDateTime closeDate;

    private JobStatus status;


    public static List<DisplayJob> from(List<Job> jobs) {
        return jobs.stream()
                .map(job -> new DisplayJob(
                        job.getTitle(),
                        job.getCompany(),
                        job.getLocation(),
                        job.getPosition(),
                        job.getWorkMode(),
                        job.getWorkType(),
                        job.getOpenDate(),
                        job.getCloseDate(),
                        job.getStatus()
                ))
                .toList();
    }

    public static DisplayJob from (Job job){
        return new  DisplayJob(
                job.getTitle(),
                job.getCompany(),
                job.getLocation(),
                job.getPosition(),
                job.getWorkMode(),
                job.getWorkType(),
                job.getOpenDate(),
                job.getCloseDate(),
                job.getStatus()
        );
    }
}
