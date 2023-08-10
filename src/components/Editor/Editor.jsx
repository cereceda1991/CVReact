import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const [content, setContent] = useState("");

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleContentChange} />
    </div>
  );
}

export default Editor;
