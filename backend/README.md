# Getting Started
This backend project is developed using Java with the Spring Boot Framework, and H2 embedded database. To develop a Java Spring Boot project you must have installed Java Development Kit (JDK) 17 or higher.

## IntelliJ
This backend project is best developed locally on IntelliJ as it will automatically configure the Spring Boot project and Maven will download all the dependencies required. All you need is JDK 17 or higher.

Download Links:  
[IntelliJ](https://www.jetbrains.com/idea/download/#section=windows) |
[Java Development Kit](https://www.oracle.com/java/technologies/downloads/)


## Visual Studio Code
If you choose to instead not use IntelliJ and use something else such as Visual Studio Code (used in Codespaces), then you must download two extensions in order to develop a Spring Boot application in Visual Studio Code. 

1) As stated previously, you must install JDK 17 or higher in order to develop a Java Spring Boot project. You can verify your JDK version by using the following command:
    ```
    java -version
    ```
    If you don't have JDK installed or have a JDK below version 17, follow these addtional steps **depending on your environment**:  

    - ## Local Development:
        Simply visit the [Oracle website](https://www.oracle.com/java/technologies/downloads/) and install any version 17 or higher.

    - ## Codespaces:
        Codespaces should already have JDK installed. However, if the JDK running on your codespace is below version 17, follow the steps shown in these [GitHub Docs](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-java-project-for-codespaces) to change the JDK version in your codespace.   

2) You can use the following commands in your terminal to install the Visual Studio Code extensions **"Extension Pack for Java"** and **"Spring Boot Extension Pack"**:     
    ```
    code --install-extension vscjava.vscode-java-pack
    code --install-extension vmware.vscode-boot-dev-pack
    ```
    Alternatively, you can also manually download these extensions by going into Visual Studio Code and going to the **"Extensions"** tab and looking up the names of the required extensions. Or you can also click the download links below.

3) Visual Studio Code should now be able to detect and import the Spring Boot project after installing the extensions. The import button will be located in the **"Java Projects"** tab. Click this button.      
![Visual Studio Code import button](/documentation/static/img/vsc-import-button.png)

    Alternatively, you can access the Visual Studio Code Command Palette (```Shift```+```Command```+```P``` / ```Ctrl```+```Shift```+```P```), then start typing "import java". Click on **Java: Import Java Projects into Workspace**.     
    ![Visual Studio Code import command](/documentation/static/img/vsc-import-command.png)

4) After having the proper version of JDK installed and installing the required extensions, you can now update the dependecies if they aren't already updated. Make sure you are in the ```/backend``` directory to run the following command:   
    ```
    mvn clean install
    ```

5) You can now start the Spring Boot project by running the **BackendApplication** java file. This can be done by going into the Spring Boot Dashboard and starting the project from there.

    Alternatively, you can also start the project via the terminal which will run a file within the ```/backend``` directory, however this will rebuild the project everytime so it may just be faster booting the project via the Visual Studio Code UI. Once you are in the ```/backend``` directory, the command to rebuild and run the project is:
    ```
    ./mvnw spring-boot:run
    ```

Download Links:  
[Visual Studio Code](https://code.visualstudio.com/download) |
[Java Development Kit](https://www.oracle.com/java/technologies/downloads/) |
[Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) |
[Spring Boot Extension Pack](https://marketplace.visualstudio.com/items?itemName=vmware.vscode-boot-dev-pack)

Learn More:     
Official documentation on developing a [Spring Boot application in Visual Studio Code](https://code.visualstudio.com/docs/java/java-spring-boot).

# Accessing The Database
H2 database has an embedded GUI console for browsing the contents of the database and running SQL queries. Follow the steps in order to access the console:

1) Start the Spring Boot application by running the **BackendApplication** java file.

2) The H2 console will now be running along with the backend API. Navigate to http://localhost:8080/h2-console/ which will present you with a login page

3) The login credentials should look like this:
![Login page for H2 console](/documentation/static/img/h2-login.png)        
When booting the H2 console for the first time, the login credentials may be different. Verify that the JDBC URL is ```jdbc:h2:~/tutraffic/database```. Note that there is also NO password.

4) Once connected, you'll see a comprehensive webpage that lists all the tables on the left side of the page and a textbox for running SQL queries. Here is an example of running a query to display all data in the **USERS** table:   
![Login page for H2 console](/documentation/static/img/h2-tables.png)

Learn More:     
To learn more about H2 database, check out the [documentation by tutorialspoint](https://www.tutorialspoint.com/h2_database/index.htm).

# REST API Endpoints
In the **BackendController** java file, you can find all the endpoints that the backend API provides. You can find all the information related to the endpoint's URL and the valid responses they can receive in the [API Specification](https://capstone-projects-2023-spring.github.io/project-tutraffic/docs/api-specification/api) portion of the TuTraffic docasaurus website.

Once starting the Spring Boot project, the backend will be hosted on ```http://localhost:8080/```. When testing the endpoints, you can use the Postman API platform to send HTTP requests to the endpoints. You must make sure you have the correct HTTP request type and URL that matches the endpoint you want to test.    

Here is an example of testing the ```/users/create``` endpoint, which is a POST request that requires a request body with the **"email"** and **"password"** data fields:   
![Postman API Endpoint Test](/documentation/static/img/postman-example-1.png)

Additionally, you can now check the H2 console and run SQL queries to verify that the endpoints work.

Download Links:  
[Postman API Platform](https://www.postman.com/downloads/)

Learn More:     
To learn more on the Postman API Platform, check out the [official documentation](https://learning.postman.com/docs/introduction/overview/).
