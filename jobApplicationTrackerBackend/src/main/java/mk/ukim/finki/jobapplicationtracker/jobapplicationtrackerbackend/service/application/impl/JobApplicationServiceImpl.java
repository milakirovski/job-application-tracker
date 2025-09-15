package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.application.impl;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.CreateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.DisplayJob;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.UpdateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.Job;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.application.JobApplicationService;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.domain.JobService;
import org.springframework.stereotype.Service;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationServiceImpl implements JobApplicationService {

    private final JobService jobService;

    public JobApplicationServiceImpl(JobService jobService) {
        this.jobService = jobService;
    }

    @Override
    public List<DisplayJob> findAll() {
        return DisplayJob.from(jobService.findAll());
    }

    @Override
    public Optional<DisplayJob> findById(String id) {
        return jobService.findById(id).map(DisplayJob::from);
    }

    @Override
    public DisplayJob save(CreateJobDto jobDto) throws MalformedURLException {
        return DisplayJob.from(jobService.save(
                jobDto.getTitle(),
                jobDto.getCompany(),
                jobDto.getLocation(),
                jobDto.getDescription(),
                jobDto.getFieldOfInterest(),
                jobDto.getPosition(),
                jobDto.getWorkMode(),
                jobDto.getWorkType(),
                new URL(jobDto.getCompanyWebsite()),
                jobDto.getStatus(),
                jobDto.getOpenDate(),
                jobDto.getCloseDate()
        ));
    }

    @Override
    public Optional<DisplayJob> update(String id, UpdateJobDto jobDto) throws MalformedURLException {

        URL url = jobService.findById(id).map(Job::getCompanyWebsite).orElse(null);

        Optional<Job> job  = jobService.update(id,
                jobDto.getTitle(),
                jobDto.getCompany(),
                jobDto.getLocation(),
                jobDto.getDescription(),
                jobDto.getFieldOfInterest(),
                jobDto.getPosition(),
                jobDto.getWorkMode(),
                jobDto.getWorkType(),
                url,
                jobDto.getStatus(),
                jobDto.getOpenDate(),
                jobDto.getCloseDate());

        return job.map(DisplayJob::from);

    }

    @Override
    public void deleteById(String id) {
        jobService.deleteById(id);
    }
}
