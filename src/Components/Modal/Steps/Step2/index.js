import React, { useEffect } from "react";
import DragAndDropComponent from "../../../DragAndDrop";

export default function Step2(props) {
  const {items, setItems} = props;

  return (
    <div>
       <DragAndDropComponent items={items} setItems={setItems} />
    </div>
  );
}
