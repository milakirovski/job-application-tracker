package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.application;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.CreateJobDto;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.DetailedDisplayJob;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.DisplayJob;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.dto.UpdateJobDto;

import java.net.MalformedURLException;
import java.util.List;
import java.util.Optional;

public interface JobApplicationService {
    List<DisplayJob> findAll();

    Optional<DisplayJob> findById(String id);

    DisplayJob save (CreateJobDto jobDto) throws MalformedURLException;

    Optional<DisplayJob> update(String id, UpdateJobDto jobDto) throws MalformedURLException;

    void deleteById(String id);

    Optional<DetailedDisplayJob> getDetailedJobById(String id);
}
