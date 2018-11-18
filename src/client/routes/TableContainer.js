/*
* Contributors: Darcy Hughes, Collin Christensen
* Group: CSE 486 Capstone GoDaddy
* File: TableContainer.js
* Desc: This file contains all elements to build and populate
*       the event table.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        { Title: 'test name 1', Location: 'test', Date: 'test' },
        { Title: 'test name 2', Location: 'test', Date: 'test' },
        { Title: 'test name 3', Location: 'test', Date: 'test' }
      ]
    };
  }

  // Lists events
  ListEvents() {
    axios({
      method: 'get',
      url: '/listEvents',
      timeout: 5000
    })
      .then((res) => {
        const events = res.data;
        this.setState({ events });
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
  }

  // Deletes an event with the given key
  deleteEvent(id) {
    axios.post('/delete', { id })
      .then((res) => {
        console.log(res.data);
        this.componentDidMount();
      })
      .catch((err) => {
        console.error('ERROR:', err);
      });
    this.componentDidMount();
  }

  // Test
  testMessage(e) {
    console.log('Delete Button Pressed');
  }

  render() {
    return (
      <Table id="event-table">
        <TableHead>
          <TableRow>
            <TableCell>Event Title</TableCell>
            <TableCell location>Location</TableCell>
            <TableCell date>Date</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.events.map(event => (
            <TableRow id={event.Id}>
              <TableCell>{event.Title}</TableCell>
              <TableCell>{JSON.stringify(event.Location)}</TableCell>
              <TableCell>{event.Date}</TableCell>
              <TableCell>
                {
                  // <IconButton onClick={() => { this.deleteEvent(event.Id); }}><DeleteIcon /></IconButton>
                }
                <IconButton onClick={() => { this.testMessage(event.Id); }}><DeleteIcon /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}
export default TableContainer;
