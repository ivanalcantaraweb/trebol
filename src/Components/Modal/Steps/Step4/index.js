import React, { useState, useEffect } from "react";
import DragAndDropComponent from "../../../DragAndDrop";
import { Icon } from "@chakra-ui/react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import { BsFilePdf, BsFiletypeTxt, BsFiletypeDocx } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const ItemDocument = ({ item }) => {

  const Icons = {
    pdf: <BsFilePdf fontSize={"3rem"} />,
    docx: <BsFiletypeTxt fontSize={"3rem"} />,
    txt: <BsFiletypeDocx fontSize={"3rem"} />,
  };

  return (
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
          justifyContent: "start",
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
          {Icons[item.type]}
          {item.type}
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <span style={{ fontWeight: "bold" }}>{item.name}</span>
          <span style={{ fontSize: "0.9rem" }}>{item.size}KB</span>
        </div>
       
      </div>
    </div>
  );
};

export default function Step4(props) {
  const { items, setItems } = props;

  return (
    <div>
      {items.map((item) => {
        return <ItemDocument item={item} />;
      })}
    </div>
  );
}
