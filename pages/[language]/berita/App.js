/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

export default function App() {
  const [copied, setCopied] = useState(false);

  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
  }

  return (
      <button
        className="btn "
        type=""
        onClick={copy}
        style={{
          textAlign: 'center',
          fontFamily: 'sans-serif',
          fontSize: '15px',
          marginTop: '-10px',
        }}
      >
        Copy link
      </button>
  );
}