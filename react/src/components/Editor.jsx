import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({value,onChange}) => {
  var toolbarOptions = [
    ["bold", "italic", "strike", "link", "image"], // toggled buttons
    ["blockquote", "code-block"],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  return (
      <ReactQuill
        modules={module}
        theme="snow"
        value={value}
        onChange={onChange}
        style={{height:"150px"}}
        className="h-auto"
      />

  );
};

export default Editor;
