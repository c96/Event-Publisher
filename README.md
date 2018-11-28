## Event Publisher (Working Title: EventMonkey)

EventMonkey is an app for events and promotions. Publish events to Facebook easily with YouTube upload and Google Maps to streamline the process.

App Engine app that acts as the Event Publisher.

### Pre-Setup (Optional)

Step 1: Create a local key somewhere

    gcloud iam service-accounts keys create service-key.json --iam-account=IAM_ACCOUNT

Step 2: Revoke default credentials

    gcloud auth application-default revoke

Step 3: Set an environment variable in Terminal or Command Prompt:

    set GOOGLE_APPLICATION_CREDENTIALS=path/to/local_key/service-key.json

### Usage

Step 1: enter the following

    npm install 
    
    npm run-script bundle && npm start

Step 2: Navigate to localhost:3000 in a browser

Step 3: Deploy to google cloud 

    gcloud app deploy
