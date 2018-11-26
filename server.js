const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: 'testvalue' }));

app.get('/aatest', (req, res) => {
  res.send('Hello from App Engine!');
});

// Google Cloud Platform project ID
const projectId = 'event-table';
// Google Cloud Datastore Client
const Datastore = require('@google-cloud/datastore');

const datastore = new Datastore({
  projectId,
});


app.post('/addEvent', (req) => {
  console.log(req.body);

  // The Cloud Datastore key for the new entity
  const eventKey = datastore.key('Event');

  // Prepares the new entity
  const entity = {
    key: eventKey,
    data: req.body
  };

  // Saves the entity
  datastore
    .save(entity)
    .then(() => {
      console.log(`Saved ${entity.key.name}: ${entity.data.description}`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
});

/**
 * listEvents
 *  @param req, unused
 *  @return a JSON object with events from Google Datastore
 *  Lists the 10 most recent events in Google Datastore.
 */
app.get('/listEvents', (req, res) => {
  const query = datastore.createQuery('Event').limit(10).order('Date', {
    descending: true,
  });
  const eventList = [];

  datastore
    .runQuery(query)
    .then((results) => {
      const events = results[0];
      events.forEach((event) => {
        const date = new Date(event.Date);

        eventList.push({
          Title: event.Title,
          Location: event.Address,
          Date: date.toLocaleDateString('en-US'),
          Id: event[datastore.KEY].path[1]
        });
      });
      // console.log(list);
      res.send(eventList);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
});

/**
 * delete
 *  @param req, a JSON object with the key of the item to be
 *          deleted.
 *  @return a string confirming the event was deleted
 *  Desc: Deletes an event from Google Datastore
 */
app.post('/delete', (req) => {
  console.log(req.body);
  const eventKey = datastore.key(['Event', req.body.id]);

  datastore
    .delete(eventKey)
    .then(() => {
      console.log('Event deleted successfully.');
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
