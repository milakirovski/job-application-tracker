package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto;

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

    private String id;

    private String title;

    private String company;

    private String location;

    private PositionLevel position;

    private WorkMode workMode;

    private WorkType workType;

    private LocalDateTime openDate;

    private LocalDateTime closeDate;

    private JobStatus status;


    public static List<DisplayJob> from(List<Job> jobs) {
        return jobs.stream()
                .map(job -> new DisplayJob(
                        job.getId(),
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
                job.getId(),
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
