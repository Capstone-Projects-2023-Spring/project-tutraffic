# Getting Started
This backend project is developed using Java with the Spring Boot Framework, and H2 embedded database. To develop a Java Spring Boot project you must have installed Java JDK 17 or higher.

### IntelliJ
This backend project is best developed on IntelliJ as Maven will automatically configure and download all the dependencies required. All you need is Java JDK 17 or higher.

Download Links:  
[IntelliJ](https://www.jetbrains.com/idea/download/#section=windows) |
[Java JDK](https://www.oracle.com/java/technologies/downloads/)


### Visual Studio Code
If you choose to instead not use IntelliJ and use something else such as Visual Studio Code (used in Codespaces), then you must download two extensions in order to develop a Spring Boot application in Visual Studio Code. 

You can use the following commands in your terminal to install the Visual Studio Code extensions **"Extension Pack for Java"** and **"Spring Boot Extension Pack"**:
```
code --install-extension vscjava.vscode-java-pack
code --install-extension vmware.vscode-boot-dev-pack
```
Alternatively, you can also manually download these extensions by going into your Visual Studio code IDE and going to the "extensions" tab and looking up the names of the required extensions. Or you can click the direct download links below.

In codespaces, Java JDK 17 will already be installed. However, if you don't have any Java JDK versions on your local machine, you must install it in order to develop a Java Spring Boot project.

Download Links:  
[Visual Studio Code](https://code.visualstudio.com/download) |
[Java JDK](https://www.oracle.com/java/technologies/downloads/) |
[Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) |
[Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

Learn More:     
Official documentation on developing a [Spring Boot application in Visual Studio Code](https://code.visualstudio.com/docs/java/java-spring-boot).

# Accessing The Database
H2 database has an embedded GUI console for browsing the contents of the database and running SQL queries. Follow the steps in order to access the console:
1) Start the Spring Boot application by running the **BackendApplication** java file.
2) Navigate to http://localhost:8080/h2-console/ which will present you with a login page.
3) The login credentials should look like this (**Note** that there is NO password):    
![Login page for H2 console](/documentation/static/img/h2-login.png)
4) Once connected, you'll see a comprehensive webpage that lists all the tables on the left side of the page and a textbox for running SQL queries. Here is an example of running a query to display all data in the **USERS** table:   
![Login page for H2 console](/documentation/static/img/h2-tables.png)

Learn More:     
To learn more about H2 database, check out the [documentation by tutorialspoint](https://www.tutorialspoint.com/h2_database/index.htm).

# REST API Endpoints
In the **BackendController** java file, you can find all the endpoints that the backend API provides. You can find all the information related to the endpoint's URL and the valid responses they can receive in the [API Specification](https://capstone-projects-2023-spring.github.io/project-tutraffic/docs/api-specification/api) portion of the TuTraffic docasaurus website.

Once starting the Spring Boot project, the backend will be hosted on ```http://localhost:8080/```. When testing the endpoints locally, you can use the Postman API platform to send HTTP requests to the endpoints. You must make sure you have the correct HTTP request type and URL that matches the endpoint you want to test. You must also be sure if the endpoint requires anything else such as a path variable or request body (JSON).     

Here is an example of testing the ```/users/create``` endpoint, which is a POST request that requires a request body with the **"email"** and **"password"** data fields:   
![Postman API Endpoint Test](/documentation/static/img/postman-example-1.png)

Additionally, you can now check the H2 console and run SQL queries to verify that the endpoints work.

Download Links:  
[Postman API Platform](https://www.postman.com/downloads/)

Learn More:     
To learn more on the Postman API Platform, check out the [official documentation](https://learning.postman.com/docs/introduction/overview/).
