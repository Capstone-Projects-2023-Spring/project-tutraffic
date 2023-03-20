package tutraffic.backend;

import org.jasypt.util.password.BasicPasswordEncryptor;
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
    public ResponseEntity<String> createUser(@RequestBody User json) {
        List<User> users = userRepository.findAll();
        boolean exists = users.stream().anyMatch(item -> item.getEmail().equals(json.getEmail()));

        // Make sure the request body isn't missing any data
        if (json.getEmail() == null || json.getPassword() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Missing data in request body.");
        }

        // Check if a user with the current email is already registered
        if (exists) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already in use.");
        } else {
            userRepository.save(new User(json.getEmail(), json.encryptPassword()));
            return ResponseEntity.status(HttpStatus.CREATED).body("A new user has been successfully created.");
        }
    }

    // Update a user's data in the database
    @PutMapping("/users/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable("id") Integer id, @RequestBody User json) {
        List<User> users = userRepository.findAll();
        boolean exists = users.stream().anyMatch(item -> item.getEmail().equals(json.getEmail()));

        // Check if a user with the new email is already being used
        if (exists) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("No fields updated. Email already in use.");
        } else {
            Optional<User> currentData = userRepository.findById(id);
            if (currentData.isPresent()) {
                User newData = currentData.get();

                // Only update values included in the request body
                if (json.getEmail() != null) {
                    newData.setEmail(json.getEmail());
                }
                if (json.getPassword() != null) {
                    newData.setPassword(json.encryptPassword());
                }

                // Save the new changes
                userRepository.save(newData);
                return ResponseEntity.status(HttpStatus.OK).body("User with ID: " + id + " has been updated.");
            } else {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("User with ID: " + id + " does not exist.");
            }
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

    // Verify user login information
    @GetMapping("/users/login")
    public ResponseEntity<?> verifyLogin(@RequestBody User json) {
        User user = userRepository.findByEmail(json.getEmail());

        // Check if a valid user was found in the database
        if (user == null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User does not exist");
        } else {
            // Check if the passwords match
            boolean samePassword = new BasicPasswordEncryptor().checkPassword(json.getPassword(), user.getPassword());
            if (samePassword) {
                // Return the ID of the user who was successfully validated
                return new ResponseEntity<>(user.getId(), HttpStatus.OK);
            } else {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Incorrect password.");
            }
        }
    }

    // Get user email from an ID
    @GetMapping("/users/get/{id}")
    public ResponseEntity<String> getUserEmail(@PathVariable("id") Integer id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get().getEmail(), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with ID: " + id + " does not exist.");
        }
    }
}
