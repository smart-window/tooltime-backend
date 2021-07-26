# Tooltime Backend Server

### How to run server on local environment
- Setup `.env` file
  Copy `.env.example` to `.env` and check with your Mysql config.
  
- Run migration
  ```
  sequelize db:migrate
  sequelize db:seed:all
  ```
  Check [Sequelize CLI](https://github.com/sequelize/cli) to learn more about seqeulize cli options.
- Install deps
  ```
  npm install
  ```
- Run express server
  ```
  npm run dev
  ```

  or 
  ```
  yarn dev
  ```

### copy .env.dist to .env

  # Stripe keys
  STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
  STRIPE_SECRET_KEY=your_stripe_secret_key

  # Email Verification
  JWT_SECRET=tooltime-secret-key
  GMAIL_ADDR=your_work_email_address   (ex: mediumtutorial2021@gmail.com)
  GMAIL_PASS=your_work_email_password  (ex: medium2021t)
  ```
- To use Gmail with nodemailer, you’ll have to [enable the access for less secure apps](https://www.google.com/settings/security/lesssecureapps), otherwise it won’t send any emails.
  

### How to run server on docker environment
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

Login with oliver@tt.com / a
