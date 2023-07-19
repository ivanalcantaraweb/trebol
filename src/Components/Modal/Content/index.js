import React, { useEffect } from "react";
import { useSteps } from "@chakra-ui/react";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import StepperComponent from "../../Stepper";
import { ModalFooter, Button } from "@chakra-ui/react";

export default function ModalContentComponent(props) {
  const { onClose, items, setItems } = props;
  const steps = [
    { title: "Primer paso", description: "Situación fiscal" },
    { title: "Segundo paso", description: "Acta de constitutiva" },
    { title: "Tercer paso", description: "Acta de asamblea" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <Step1 items={items} setItems={setItems} />;
      case 1:
        return <Step2 items={items} setItems={setItems} />;
      case 2:
        return <Step3 items={items} setItems={setItems} />;
      case 3:
        return <Step4 items={items} setItems={setItems} />;
    }
  };

  return (
    <div>
      <StepperComponent
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      {renderStep()}
      <ModalFooter gridGap={2}>
        {activeStep === 0 ? (
          <Button onClick={onClose}>Cancelar</Button>
        ) : (
          <Button onClick={handlePrev}>Atras</Button>
        )}

        {activeStep === steps.length ? (
          <Button onClick={onClose} colorScheme="blue" variant="solid">
            Enviar
          </Button>
        ) : (
          <Button onClick={handleNext} colorScheme="blue" variant="solid">
            Siguiente
          </Button>
        )}
      </ModalFooter>
    </div>
  );
}
