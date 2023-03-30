package tutraffic.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

@WebMvcTest(controllers = BackendController.class)
public class BackendControllerTests {

	@Autowired
	MockMvc mockMvc;

	@MockBean
	private UserRepository userRepository;

	@MockBean
	private User user;

	/**
	 * Tests the method createUser().
	 * Case 1: Create a new user.
	 * Expected Result: Response states that the user is created.
	 */
	@Test
	void shouldCreateUser() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders
				.post("/users/create")
				.content("{\"email\": \"user@domain.com\",\"password\": \"password1234\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isCreated());
	}

	/**
	 * Tests the method createUser().
	 * Case 2: Create a user with an email that already exists in the database.
	 * Expected Result: The response states that the request conflicts with the
	 * database.
	 */
	@Test
	void shouldFailToCreateUserExisting() throws Exception {
		List<User> users = new ArrayList<User>();
		users.add(user);
		when(user.getEmail()).thenReturn("user@domain.com");
		when(userRepository.findAll()).thenReturn(users);
		mockMvc.perform(MockMvcRequestBuilders
				.post("/users/create")
				.content("{\"email\": \"user@domain.com\",\"password\": \"password5678\"}")
				.contentType(MediaType.APPLICATION_JSON))
				.andExpect(MockMvcResultMatchers.status().isConflict());
	}

	/**
	 * Tests the method createUser().
	 * Case 3: Create a user with empty password.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToCreateUserEmptyPassword() {
	}

	/**
	 * Tests the method createUser().
	 * Case 4: Create a user with empty email.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToCreateUserEmptyEmail() {
	}

	/**
	 * Tests the method createUser().
	 * Case 5: Create a user with empty email and empty password.
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
	 * Expected Result: The response states that the request conflicts with the
	 * database.
	 */
	@Test
	void shouldFailToUpdateUserNonexistent() {
	}

	/**
	 * Tests the method updateUser().
	 * Case 5: Update an existing user's email to be empty.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToUpdateUserEmailEmpty() {
	}

	/**
	 * Tests the method updateUser().
	 * Case 6: Update an existing user's password to be empty.
	 * Expected Result: The response states that the request is bad.
	 */
	@Test
	void shouldFailToUpdateUserPasswordEmpty() {
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
	 * Expected Result: The response states that the request conflicts with the
	 * database.
	 */
	@Test
	void shouldFailToDeleteUserNonexistent() {
	}

	/**
	 * Tests the method verifyLogin().
	 * Case 1: User logs in with correct email and password.
	 * Expected Result: The response states that the request was successful.
	 */
	@Test
	void shouldVerifyLogin() {
	}

	/**
	 * Tests the method verifyLogin().
	 * Case 2: User logs in with incorrect password.
	 * Expected Result: The response states that the request conflicts with the database.
	 */
	@Test
	void shouldFailToVerifyLoginPasswordIncorrect() {
	}

	/**
	 * Tests the method verifyLogin().
	 * Case 3: User logs in with an email that does not exist in the database.
	 * Expected Result: The response states that the request conflicts with the database.
	 */
	@Test
	void shouldFailToVerifyLoginEmailIncorrect() {
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
	 * Expected Result: The response states that the request conflicts with the
	 * database.
	 */
	@Test
	void shouldFailToGetUserEmailNonexistent() {
	}
}
