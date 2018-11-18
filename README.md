## React Event Bucket Publisher API Tests

Various tests of cloud storage, API usage, etc. for event publisher app

To run:

Step 1: set environment variable in Terminal or Command Prompt 

    set GOOGLE_APPLICATION_CREDENTIALS=path/to/repo/cloud-api-testing/testing_keys/service-key.json

Step 2: in react-upload, enter the following

    npm install

    npm run build

    npm start

Step 3: Navigate to localhost:3000 to confirm.

Step 4: Deploy to google cloud 

    gcloud app deploy