package tutraffic.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class BackendController {

    @Autowired
    UserRepository userRepository;

    // Create a user and store it in the database
    @PostMapping("/users/create")
    public ResponseEntity<String> createUser(@RequestBody User user) {
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

    // Update a user's data in the database
    @PutMapping("/users/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable("id") Integer id, @RequestBody User user) {
        Optional<User> currentData = userRepository.findById(id);
        if (currentData.isPresent()) {
            User newData = currentData.get();

            // Only update values included in the request body
            if (user.getEmail() != null) {
                newData.setEmail(user.getEmail());
            }
            if (user.getPassword() != null) {
                newData.setPassword(user.encryptPassword());
            }

            // Save the new changes
            userRepository.save(newData);
            return ResponseEntity.status(HttpStatus.OK).body("User with ID: " + id + " has been updated.");
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with ID:" + id + " does not exist.");
        }
    }

    // Delete an existing user from the database
    @DeleteMapping("/users/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Integer id) {
        boolean exists = userRepository.existsById(id);
        if (exists) {
            userRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("User with ID: " + id + " has been deleted.");
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with ID:" + id + " does not exist.");
        }
    }
}
