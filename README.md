# DIT

Materials for live-coding tech test. This test is focused on the candidate's knowledge of Django REST Framework and/or React.

## App structure
This is a monorepo containing two sub-apps.
  - `/api/`: the Django backend
  - `/ui/`: the React frontend

## Setup to run dev server (API only)
  1. Install most recent version of [Docker Desktop](https://www.docker.com/products/docker-desktop)

  2. Build the project:
  ```docker-compose -f docker-compose.api.yml build```

  3. Run the dev server:
  ```docker-compose -f docker-compose.api.yml up```

  4. You should see the site is running on the backend ( localhost:8000 ).

Step 1 is a one-off step. Step 2 is only required if you have materially altered the project since last build, e.g. by changing `api/requirements.txt`. Code changes are picked up automatically by the Django and Node dev servers and they will reload the proejct modules upon detecting a change.

## Setup to run dev server (full stack)
  1. Install most recent version of [Docker Desktop](https://www.docker.com/products/docker-desktop)

  2. Build the project: ```docker-compose build```

  3. Run the dev server:
  ```docker-compose up```

  4. You should see the site is running on the backend ( localhost:8000 ) and the frontend ( localhost:3000 ).

Step 1 is a one-off step. Step 2 is only required if you have materially altered the project since last build, e.g. by changing `api/requirements.txt` or `ui/package.json`. Code changes are picked up automatically by the Django and Node dev servers and they will reload the proejct modules upon detecting a change.

## Setup to run api tests
You do not need to follow the previous sections to run the tests. Just:

   1. Install most recent version of [Docker Desktop](https://www.docker.com/products/docker-desktop)

  2. Build the project:
  ```docker-compose build```

  3. ```docker-compose run api pytest```

  Step 1 is a one-off step. Step 2 is only required if you have materially altered the project since last build, e.g. by changing `api/requirements.txt`.

  # Mini Data Hub

  Mini Data Hub is designed to manage company, contact, and interaction data through a RESTful API.

  ## App structure
  This is a monorepo containing two sub-apps.
    - `/api/`: the Django backend
    - `api/minihub/`: Rails API only application(sub module)
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
