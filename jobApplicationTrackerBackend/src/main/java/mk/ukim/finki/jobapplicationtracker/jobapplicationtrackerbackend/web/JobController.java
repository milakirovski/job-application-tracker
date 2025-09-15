package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.web;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.CreateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.DisplayJob;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.UpdateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.application.JobApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Optional;

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

}
