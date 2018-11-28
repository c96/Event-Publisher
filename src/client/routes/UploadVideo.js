/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import TextField from '@material-ui/core/TextField/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';

class UploadVideo extends Component {
  state= {
    videoTitle: null,
    videoDesc: null,
    privacy: 0
  };

  handleTitle() {
    this.setState({ videoTitle: event.target.value});
  }

  handleDesc() {
    this.setState({ videoDesc: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <span id="signinButton" className="pre-sign-in">
            <span
              className="g-signin"
              data-callback="signinCallback"
              data-clientid="702182989125-jfn8dmrtm3vo0141bt20651t2u5dho5j.apps.googleusercontent.com"
              data-cookiepolicy="single_host_origin"
              data-scope="https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube"
            />
          </span>
          <Grid item xs={12}>
            <TextField
              required
              id="videoTitle"
              name="videoTitle"
              label="Video title"
              value={this.state.videoTitle}
              onChange={() => { this.handleTitle(); }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="eventDesc"
              name="eventDesc"
              label="Description"
              value={this.state.videoDesc}
              onChange={() => { this.handleDesc(); }}
              multiline="true"
              fullWidth
            />
          </Grid>
          <InputLabel htmlFor="privacy">Privacy: </InputLabel>
          <Select
            value={this.state.privacy}
            onChange={this.handleChange}
            inputProps={{
              name: 'privacy',
              id: 'privacy'
            }}
          >
            <MenuItem value={0}>Public</MenuItem>
            <MenuItem value={1}>Unlisted</MenuItem>
            <MenuItem value={2}>Private</MenuItem>
          </Select>
          <input type="file" id="file" className="button" accept="video/*" />
          <Button variant="contained" color="primary" id="button">Upload Video</Button>
          <Typography variant="body1"><span id="percent-transferred" />% done (<span
            id="bytes-transferred"
          />/<span id="total-bytes" /> bytes)
          </Typography>
          <progress id="upload-progress" max="1" value="0" />
          <Typography variant="body1">Uploaded video with id <span id="video-id" />. Polling for status...</Typography>
          <ul id="post-upload-status" />
          <Typography variant="body2" id="disclaimer">By uploading a video, you certify that you
            own all rights to the content or that you are authorized by the owner to make the
            content publicly available on YouTube, and that it otherwise complies with the YouTube
            Terms of Service located at
            <a
              href="http://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
            >http://www.youtube.com/t/terms
            </a>
          </Typography>
        </Grid>
      </React.Fragment>
    );
  }
}

export default UploadVideo;
