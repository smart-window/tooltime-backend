Working locally

1. Install deps: npm install
2. Launch the database container: docker-compose run --build
3. Launch the app: sls offline

When running locally, the app will use the secrets.local.json file and the appropriate .env file.

sls is an alias for Serverless - part of the serverless Framework
the offline command is a serverless plugin that provides a way of testing serverless functions offline
there is not good support for an offline database (thus the docker container)

Routes are developed as Express middleware
Find the base routes in ./index.js
Find routes for each middleware in the corresponding ./routes/\*.js path

The app does not have include any authentication at this time.

Database uses Sequelize. You can find the initialization script in ./database/index.js
You can find the individual models in ./models/\*.js
Most of the models have some businss logic that sets a UUID instead of an incrementing integer for the ID.
Both the Part and Product models have some business logic implemented within the models.

The datbase container is configured to persist data between reboots. If you want to reset the data, delete the contents of ./.docker/tooltime-dev-db/mysql-data except the .gitkeep file. It is also configured to forward port 3306 to the container.

To launch the new backend:
$ npm install -g nodemon
$ npm install -g sequelize-cli
$ cp .env.dist .env
$ docker-compose up --build
$ sequelize db:migrate
$ sequelize db:seed:all

Login with admin@admin.com / aaa
