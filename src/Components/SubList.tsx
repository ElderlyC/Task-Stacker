import React from "react";
import { TextField, Button } from "@mui/material";
// clicking a button creates a new 'SubList' which comprises of a title, then an expanding list
// clicking done changes inputs into display 'h3'/'li' (non editable)

const SubList = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <h3>
        <TextField
          placeholder="Title"
          size="small"
          inputProps={{ style: { fontSize: "1.5rem", fontWeight: "700" } }}
        />
      </h3>
      <TextField placeholder="Task 1" size="small" />
      <TextField placeholder="Task 2" size="small" />
      <TextField placeholder="Task 3" size="small" />
      <Button>Done!</Button>
    </div>
  );
};

export default SubList;
