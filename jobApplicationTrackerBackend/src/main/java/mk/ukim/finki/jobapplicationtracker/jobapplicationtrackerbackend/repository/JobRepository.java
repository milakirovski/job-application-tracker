package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.repository;

import mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends MongoRepository<Job, String> {
}
