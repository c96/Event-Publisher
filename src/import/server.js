const format = require('util').format;
const express = require('express');
const Multer = require('multer');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');

// Google Cloud Platform project ID
const projectId = 'cloudfunctionscloudstorage';

// Google Cloud Storage Client
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
// Select Storage Bucket
const bucket = storage.bucket('eventpub-bucket');

// Google Cloud Datastore Client
const Datastore = require('@google-cloud/datastore');
const datastore = new Datastore({
  projectId: projectId,
});

// Express
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
});


// Google Cloud Storage POST request handler

// Process the file upload and upload to Google Cloud Storage.
app.post('/uploadHandler', multer.single('file'), (req, res, next) => {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on('error', (err) => {
    next(err);
  });

  blobStream.on('finish', () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = format('https://storage.googleapis.com//${bucket.name}/${blob.name}');
    res.status(200).send(publicUrl);
  });

  blobStream.end(req.file.buffer);
});

// Google Cloud Storage List Bucket Files

app.get('/listBucketItems', (req, res) => {
  bucketName = 'eventpub-bucket';

  storage
  .bucket(bucketName)
  .getFiles()
  .then(results => {
    const files = results[0];

    console.log('Files:');
    files.forEach(file => {
      console.log(file.name);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
});

// Google Cloud Datastore POST request handler

app.post('/sendStorePOST', (req, res) => {
  var eventdata = req.body;

  // The kind for the new entity
  const kind = eventdata.kind;
  // The name/ID for the new entity
  const name = eventdata.jsondata.name;
  // The Cloud Datastore key for the new entity
  const entityKey = datastore.key([kind, name]);

  // Prepares the new entity
  const entity = {
    key: entityKey,
    data: eventdata.jsondata
  };

  // Saves the entity
  datastore
    .save(entity)
    .then(() => {
      console.log(`Saved ${entity.key.name}: ${entity.data.description}`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});