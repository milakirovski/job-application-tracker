package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.service.domain;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.Job;
import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.enums.*;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface JobService {

    List<Job> findAll();

    Optional<Job> findById(String id);

    Job save(String title,
             String company,
             String location,
             String description,
             FieldOfInterest fieldOfInterest,
             PositionLevel position,
             WorkMode workMode,
             WorkType workType,
             URL companyWebsite,
             JobStatus status,
             LocalDateTime openDate,
             LocalDateTime closeDate) throws MalformedURLException;

    Optional<Job> update(String id,
                     String title,
                     String company,
                     String location,
                     String description,
                     FieldOfInterest fieldOfInterest,
                     PositionLevel position,
                     WorkMode workMode,
                     WorkType workType,
                     URL companyWebsite,
                     JobStatus status,
                     LocalDateTime openDate,
                     LocalDateTime closeDate) throws MalformedURLException;

    void deleteById(String id);

}
