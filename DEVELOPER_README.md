# Mini Data Hub

Mini Data Hub is designed to manage company, contact, and interaction data through a RESTful API.

## App structure
This is a monorepo containing two sub-apps.
  - `/api/`: the Django backend
  - `api/minihub_api/`: Rails API only application(sub module)
  - `/ui/`: the React frontend

  Approach to the Solution
  1. Understanding the Original Python Code:

  * I analyzed the existing Django code to grasp the functionality and structure, focusing on the models: Company, Contact, and Interaction.
  2. Designing the Ruby on Rails API:
    * I translated the Django models into Rails, ensuring that the relationships and data structures were preserved.

    * I implemented necessary API endpoints to handle CRUD operations for the models.
  3. Developing the React Frontend:
    * I built a React application that interfaces with the Rails API. This included components for displaying lists of companies, contacts, and interactions, as well as forms for adding new entries.

  4. Using Docker Compose:
    * To streamline development, I used Docker Compose to manage the application’s services. This allows for easy configuration, scaling, and isolation of the backend and frontend environments.


    Setup to Run the Development Server (Full Stack)
   1. Ensure Docker Desktop is installed on your machine, which will allow you to run Docker containers.
   2. Clone the Repository
   3. Build the Project
      Frontend: /DBT :`docker-compose build`
      Backend:  /mini_hub_api path:`docker-compose build`
   4. Run the Development Server
      Frontend: /DBT :`docker-compose up`
      Backend:  /mini_hub_api path:`docker-compose up`
   5. Access the Application:
        Once the containers are up and running, you should see that the backend is accessible at http://localhost:3001 and the frontend at http://localhost:8000
