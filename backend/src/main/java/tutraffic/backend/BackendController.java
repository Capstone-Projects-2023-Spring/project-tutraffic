package tutraffic.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class BackendController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/users/create")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        // Create a user and store it in the database
        try {
            List<User> users = userRepository.findAll();
            boolean exists = users.stream().anyMatch(item -> item.getEmail().equals(user.getEmail()));

            // Check to see if a user with the current email is already registered
            if (exists) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists.");
            } else {
                userRepository.save(new User(user.getEmail(), user.encryptPassword()));
                return ResponseEntity.status(HttpStatus.CREATED).body("A new user has been successfully created.");
            }
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create new user.");
        }
    }
}
