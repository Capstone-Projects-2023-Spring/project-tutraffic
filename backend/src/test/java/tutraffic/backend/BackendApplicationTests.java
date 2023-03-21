package tutraffic.backend;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void fail() {
		assertTrue(false);
	}

	@Test
	void pass() {
		assertTrue(true);
	}

}
