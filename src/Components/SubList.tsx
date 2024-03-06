import React from "react";
// clicking a button creates a new 'SubList' which comprises of a title, then an expanding list
// clicking done changes inputs into display 'h3'/'li' (non editable)

const SubList = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
      <input placeholder="Title" />
      <input placeholder="Task 1" />
      <input placeholder="Task 2" />
      <input placeholder="Task 3" />
      <button>Done!</button>
    </div>
  );
};

export default SubList;
