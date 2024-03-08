import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
// clicking a button creates a new 'SubList' which comprises of a title, then an expanding list
// clicking done changes inputs into display 'h3'/'li' (non editable)
// infinite task adding (each new input is controlled)

const SubList = () => {
  const [editMode, setMode] = useState(true);
  const [title, setTitle] = useState("");
  return (
    <div>
      {editMode && (
        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
        >
          <h3>
            <TextField
              placeholder="Title"
              size="small"
              inputProps={{ style: { fontSize: "1.5rem", fontWeight: "700" } }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </h3>
          <TextField placeholder="Task 1" size="small" />
          <TextField placeholder="Task 2" size="small" />
          <TextField placeholder="Task 3" size="small" />
          <Button onClick={() => setMode(false)}>Done!</Button>
        </div>
      )}
      {!editMode && (
        <div
          style={{ display: "flex", flexDirection: "column", margin: "30px" }}
        >
          <h3>{title}</h3>
          <ol style={{ marginTop: "auto" }}>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default SubList;
