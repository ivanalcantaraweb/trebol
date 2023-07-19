import React, { useState, useCallback, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { BsFilePdf, BsFiletypeTxt, BsFiletypeDocx } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

export default function DragAndDropComponent(props) {
  const { items, setItems } = props;
  const [previewItem, setPreviewItem] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileFormat, setFileFormat] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewItem(reader.result);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
      setFileSize((file.size / 1000).toFixed(1));
      const defineType = file.type.split("/");
      const type = defineType[defineType.length - 1];
      setFileFormat(type);
      const temp = {
        name: file.name,
        size: file.size,
        type: type,
        file: file,
      };
      setItems(items.concat(temp));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const Icons = {
    pdf: <BsFilePdf fontSize={"3rem"} />,
    docx: <BsFiletypeTxt fontSize={"3rem"} />,
    txt: <BsFiletypeDocx fontSize={"3rem"} />,
  };

  const HandleOpen = () => {
    setPreviewItem("");
  };

  return previewItem === "" ? (
    <Box
      {...getRootProps()}
      borderWidth={2}
      borderStyle="dashed"
      borderRadius="md"
      p={4}
      textAlign="center"
      cursor="pointer"
      borderColor={isDragActive ? "blue.500" : "gray.300"}
      bg={isDragActive ? "blue.50" : "white"}
      width="100%"
      height="300px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      margin="2rem 0px"
    >
      <input {...getInputProps()} />

      <MdOutlineCloudUpload
        fontSize={46}
        boxSize={16}
        color={"#003e73"}
        mb={4}
      />
      <Text fontSize="md" fontWeight="medium">
        {isDragActive
          ? "Suelta los archivos aquí..."
          : "Arrastra y suelta los archivos aquí o haz clic para seleccionarlos"}
      </Text>
    </Box>
  ) : (
    <div
      style={{
        border: "1px solid #E7E7E7",
        width: "100%",
        borderRadius: "1rem",
        padding: "2rem",
        margin: "2rem 0px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Icons[fileFormat]}
            {fileFormat}
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <span style={{ fontWeight: "bold" }}>{fileName}</span>
            <span style={{ fontSize: "0.9rem" }}>{fileSize}KB</span>
          </div>
        </div>
        <Button variant="solid" onClick={HandleOpen}>
          <MdDeleteOutline fontSize={"lg"} style={{ fontSize: "1.3rem" }} />
        </Button>
      </div>
    </div>
  );
}
