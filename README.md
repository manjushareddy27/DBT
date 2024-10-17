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
