## Ourpass Backend Task Solution

This repository contains the code to the solution for the backend engineering assessment by [https://ourpass.co]('https://ourpass.co)

### Project Setup

This project is built with NodeJs, MongoDB, Express & with the popular **dotenv** package for programmatically accessing environment variables.

A mirrow of the **.env** file which should and is not a part of this repository is provided in the **.env.example** file at the project root directory

- Clone this project by running the command ```git clone git@github.com:danielokoronkwo-coder/ourpass-task-assessment.git```
- run ``npm install``
- Create a ``.env`` file at the root of your project directory
- Copy the content of ```.env.example``` file ``.env`` file
- Build something amazing
- Start the development server with the command ```yarn start:dev``` or ```npm run start:dev```
- The run the test run the command ```yarn test``` or ```npm test```

### Docker Project Setup

- Clone this project by running the command ```git clone git@github.com:danielokoronkwo-coder/ourpass-task-assessment.git```
- Run `cd ourpass-task-assessment` to move into the project directory
- Run `docker-compose up` to spin up a mongoDB container and an Express application
- Of course you need to have Docker installed on your machine to run the docker-compose command