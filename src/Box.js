import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  return (
    <div>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor
        }}
      />
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
