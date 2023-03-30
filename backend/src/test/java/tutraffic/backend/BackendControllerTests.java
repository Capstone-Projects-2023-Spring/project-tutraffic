package tutraffic.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers= BackendController.class)
public class BackendControllerTests {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	private UserRepository userRepository; 

	/**
	 * Tests the method createUser().
	 * Case 1: Create a new user.
	 * Expected Result: Response states that the user is created.
	 */
	@Test
	void shouldCreateUser() {
	}

	/**
	 * Tests the method createUser().
	 * Case 2: Create a user with an email that already exists in the database.
	 * Expected Result: The response states that the request conflicts with the database.
	 */
	@Test
	void shouldFailToCreateUserExisting() {
	}

	/**
	 * Tests the method createUser().
	 * Case 3: Create a user without password.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToCreateUserNoPassword() {
	}

	/**
	 * Tests the method createUser().
	 * Case 4: Create a user without email.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToCreateUserNoEmail() {
	}

	/**
	 * Tests the method createUser().
	 * Case 5: Create a user without email and password.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToCreateUserEmpty() {
	}

	/**
	 * Tests the method updateUser().
	 * Case 1: Update an existing user's email.
	 * Expected Result: The response states that the request was successful.
	 */
	@Test
	void shouldUpdateUserEmail() {
	}

	/**
	 * Tests the method updateUser().
	 * Case 2: Update an existing user's password.
	 * Expected Result: The response states that the request was successful.
	 */
	@Test
	void shouldUpdateUserPassword() {
	}

	/**
	 * Tests the method updateUser().
	 * Case 3: Update an existing user's email and password.
	 * Expected Result: The response states that the request was successful.
	 */
	@Test
	void shouldUpdateUserEmailAndPassword() {
	}

	/**
	 * Tests the method updateUser().
	 * Case 4: Update a user that does not exist.
	 * Expected Result: The response states that the request conflicts with the database.
	 */
	@Test
	void shouldFailToUpdateUserNonexistent() {
	}

	/**
	 * Tests the method deleteUser().
	 * Case 1: Delete a user identified by id.
	 * Expected Result: The response states that the request was successful.
	 */
	@Test
	void shouldDeleteUser() {
	}

	/**
	 * Tests the method deleteUser().
	 * Case 2: Delete a user that does not exist.
	 * Expected Result: The response states that the request conflicts with the database.
	 */
	@Test
	void shouldFailToDeleteUserNonexistent() {
	}

	/**
	 * Tests the method getUserEmail().
	 * Case 1: Get the email of a user identified by id.
	 * Expected Result: The response states that the request was successful.
	 */
	@Test
	void shouldGetUserEmail() {
	}

	/**
	 * Tests the method getUserEmail().
	 * Case 2: Get the email of a user that does not exist.
	 * Expected Result: The response states that the request conflicts with the database.
	 */
	@Test
	void shouldFailToGetUserEmailNonexistent() {
	}
}
