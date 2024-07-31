import React from 'react';


function Div() {
  // Inline styles for the elements
  const headingStyle = {
    color: 'green',
  };

  const paragraphStyle = {
    color: 'darkblue',
    fontSize: '16px',
  };

  const  divStyle = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '10px',
    border: '1px solid blue',
    borderRadius: '5px',
  };

  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>Inline Style in JSX Example</h1>
      <p style={paragraphStyle}>
        This is a paragraph with inline styles applied.
      </p>
    </div>
  );
}

export default Div;