import React, { useState } from "react";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";
import { Grid, Button, TextField } from "@mui/material";
import FileUpload from "../../components/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div>
      <MainLayout>
        <StepWrapper activeStep={activeStep}>
          <h1>Upload treck</h1>
          {activeStep === 0 && (
            <>
              <h1>Step 1</h1>
              <TextField
                label={"Song's name"}
                multiline
                style={{ marginTop: 10 }}
              />
            </>
          )}
          {activeStep === 1 && (
            <>
              <h1>Step 2</h1>
              <FileUpload setFile={setPicture} accept="image/*">
                <Button>Upload photo</Button>
              </FileUpload>
            </>
          )}
          {activeStep === 2 && (
            <>
              <h1>Step 3</h1>
              <FileUpload setFile={setAudio} accept="audio/*">
                <Button>Upload audio</Button>
              </FileUpload>
            </>
          )}
        </StepWrapper>
        <Grid container justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={back}>
            Back
          </Button>
          <Button onClick={next}>Next</Button>
        </Grid>
      </MainLayout>
    </div>
  );
};

export default Create;
