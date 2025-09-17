package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.web;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.CreateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.DetailedDisplayJob;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.DisplayJob;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.UpdateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.application.JobApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/jobs")
public class JobController {

    private final JobApplicationService jobApplicationService;

    public JobController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @GetMapping
    public List<DisplayJob> listAllJobs() {
        return jobApplicationService.findAll();
    }

    @PostMapping("/save")
    public ResponseEntity<DisplayJob> saveJob(@Valid @RequestBody CreateJobDto jobDto) throws MalformedURLException {

        DisplayJob savedJob = jobApplicationService.save(jobDto);

        return ResponseEntity.status(HttpStatus.OK)
                .body(savedJob);

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DisplayJob> updateJob(
            @PathVariable String id,
            @Valid @RequestBody UpdateJobDto jobDto) throws MalformedURLException {

            Optional<DisplayJob> updatedJob = jobApplicationService.update(id, jobDto);

            return updatedJob
                    .map(ResponseEntity::ok)
                    .orElse(ResponseEntity.notFound().build());

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable String id) {
        try {
            Optional<DisplayJob> existingJob = jobApplicationService.findById(id);

            if (existingJob.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            jobApplicationService.deleteById(id);
            return ResponseEntity.noContent().build(); // 204 No Content

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<DetailedDisplayJob> getDetailedJobById(@PathVariable String id) {
        return jobApplicationService.getDetailedJobById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/field-of-interest-options")
    public List<String> getFieldOfInterestOptions() {
        return Arrays.stream(FieldOfInterest.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }

    @GetMapping("/job-status")
    public List<String> getJobStatusOptions() {
        return Arrays.stream(JobStatus.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }

    @GetMapping("/position-level")
    public List<String> getJobPositionLevelOptions() {
        return Arrays.stream(PositionLevel.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }

    @GetMapping("/work-mode")
    public List<String> getWorkModeOptions(){
        return Arrays.stream(WorkMode.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }

    @GetMapping("/work-type")
    public List<String> getWorkTypeOptions(){
        return Arrays.stream(WorkType.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }
}
