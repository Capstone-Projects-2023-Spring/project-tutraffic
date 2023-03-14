package tutraffic.backend;

import jakarta.persistence.*;
import org.jasypt.util.password.BasicPasswordEncryptor;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    public User() {

    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        // Be careful with this method as it could return a raw password string if not encrypted first
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String encryptPassword() {
        return new BasicPasswordEncryptor().encryptPassword(this.password);
    }
}
