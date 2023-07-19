import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LogoBBVA from "../../Assets/bbva.png";

import TutorialCarousel from "./TutorialCarousel";
import ModalContentComponent from "./Content";

export default function ModalGeneral(props) {
  const { isOpen, onOpen, onClose } = props;
  const [items, setItems] = useState([]);
  const [tutorial, SetTutorial] = useState(true);

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  useEffect(() => {
    console.log(items);
  }, [items, setItems]);

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const WrapperModal = () => {
    if (tutorial) {
      return (
        <>
          <ModalCloseButton />
          <TutorialCarousel SetTutorial={SetTutorial} />
        </>
      );
    }
    return (
      <>
        <ModalHeader>
          <img width={70} src={LogoBBVA} alt="logo"></img>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" fontSize={20} marginBottom={2}>
            Aprobación de tarjeta de crédito
          </Text>
          <Text fontSize={14} paddingBottom={6}>
            Trébol te facilita la aprobación de tu tarjeta de crédito, por favor
            sube los siguientes documentos:
          </Text>
          <ModalContentComponent
            onClose={onClose}
            setItems={setItems}
            items={items}
          />
        </ModalBody>
      </>
    );
  };
  useEffect(() => {
    if (!isOpen) {
      SetTutorial(true);
    }
  }, [isOpen]);
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="3xl">
        {overlay}
        <ModalContent padding={"1.5rem"}>{WrapperModal()}</ModalContent>
      </Modal>
    </>
  );
}
