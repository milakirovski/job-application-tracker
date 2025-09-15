package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.domain.impl;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.Job;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.repository.JobRepository;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.domain.JobService;
import org.springframework.stereotype.Service;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {

    private final JobRepository jobRepository;

    public JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public List<Job> findAll() {
        return jobRepository.findAll();
    }

    @Override
    public Optional<Job> findById(String id) {
        return jobRepository.findById(id);
    }


    @Override
    public Job save(String title, String company, String location, String description, FieldOfInterest fieldOfInterest, PositionLevel position, WorkMode workMode, WorkType workType, URL companyWebsite, JobStatus status, LocalDateTime openDate, LocalDateTime closeDate) {
        return jobRepository.save(
                new Job(title,
                        company,
                        location,
                        description,
                        fieldOfInterest,
                        position,
                        workMode,
                        workType,
                        companyWebsite,
                        status,
                        LocalDateTime.now(),
                        LocalDateTime.now(),
                        openDate,
                        closeDate)
        );
    }

    @Override
    public Optional<Job> update(String id, String title, String company, String location, String description, FieldOfInterest fieldOfInterest, PositionLevel position, WorkMode workMode, WorkType workType, URL companyWebsite, JobStatus status, LocalDateTime openDate, LocalDateTime closeDate) {
        return jobRepository.findById(id)
                .map(existingJob -> {
                    if(title != null){
                        existingJob.setTitle(title);
                    }
                    if(company != null){
                        existingJob.setCompany(company);
                    }
                    if(location != null){
                        existingJob.setLocation(location);
                    }
                    if(description != null){
                        existingJob.setDescription(description);
                    }

                    if(fieldOfInterest != null){
                        existingJob.setFieldOfInterest(fieldOfInterest);
                    }
                    if(position != null){
                        existingJob.setPosition(position);
                    }
                    if(workMode != null){
                        existingJob.setWorkMode(workMode);
                    }
                    if(workType != null){
                        existingJob.setWorkType(workType);
                    }
                    if(companyWebsite != null){
                        existingJob.setCompanyWebsite(companyWebsite);
                    }
                    if(openDate != null){
                        existingJob.setOpenDate(openDate);
                    }
                    if(closeDate != null){
                        existingJob.setCloseDate(closeDate);
                    }
                    if(status != null){
                        existingJob.setStatus(status);
                    }
                    existingJob.setUpdatedAt(LocalDateTime.now());
                    return jobRepository.save(existingJob);
                });
    }


    @Override
    public void deleteById(String id) {
        jobRepository.deleteById(id);
    }
}
