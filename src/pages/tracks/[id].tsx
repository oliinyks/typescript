import React from 'react';
import { TextField, Button, Grid } from "@mui/material";

const TrackPage = () => {
	return (
    <div>
      TrackPage
      <Grid container>
        <TextField
          style={{ backgroundColor: "aliceblue", marginBottom: 20 }}
          label="Name"
          fullWidth
        ></TextField>
        <TextField
          style={{ backgroundColor: "aliceblue" }}
          label="Comment"
          fullWidth
          multiline
          rows={4}
        ></TextField>
        <Button>Send</Button>
      </Grid>
    </div>
  );
};

export default TrackPage;