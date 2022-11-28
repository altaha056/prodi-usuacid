import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  value?: string;
  onChange?: (value: any) => void;
}

function Editor(prop: Props) {
  const [body, setBody] = useState(prop.value || '');
  const handleBody = (e: any) => {
    // setBody(e);
    console.log(prop);
    if (prop.onChange) prop.onChange(e);
  };
  return (
    <ReactQuill
      modules={Editor.modules}
      onChange={handleBody}
      value={prop.value || ''}
    />
  );
}

Editor.modules = {
  toolbar: [false],
};

Editor.formats = [false];

export default Editor;
