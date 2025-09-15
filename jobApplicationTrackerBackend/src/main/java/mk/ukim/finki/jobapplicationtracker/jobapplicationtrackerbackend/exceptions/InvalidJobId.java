package mk.ukim.finki.jobapplicationtracker.jobapplicationtrackerbackend.exceptions;

public class InvalidJobId extends RuntimeException{
    public InvalidJobId(String jobId) {
        super(String.format("Job with id %s does not exist", jobId));
    }
}
