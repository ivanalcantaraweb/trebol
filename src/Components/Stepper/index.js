import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

export default function StepperComponent(props) {
  const { steps, activeStep, setActiveStep } = props;

  return (
    <Stepper size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>
              <span style={{ fontSize: "12px" }}>{step.title}</span>
            </StepTitle>
            <StepDescription>
              <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                {step.description}
              </span>
            </StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
