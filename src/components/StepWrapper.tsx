import React from "react";
import { Container, Stepper, Step, StepLabel, Grid, Card } from "@mui/material";

interface StepWrapperProps {
  activeStep: number;
  children?: React.ReactNode;
}

const steps = [
  "Information about the track",
  "Photo of the track",
  "Upload audio",
];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: "70px 0", height: 270 }}
      >
        <Card style={{ width: 600, padding: 20 }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
