import React from 'react';

function Show(event) {
  event.preventDefault();
  console.log('Name:', document.getElementById('name').value);
  console.log('Email:', document.getElementById('mail').value);
  console.log('Message:', document.getElementById('feed').value);
}

function App() {
  return (
    <div>
      <h1>BasicForm</h1>
      <form >
        <label>Name: </label>
        <input type="text" id="name" />
        <br />
        <br />
        <label>Email: </label>
        <input type="email" id="mail" />
        <br />
        <br />
        <label>Message:</label>
        <textarea id="feed" />
        <br />
        <br />
        <button type="submit" onClick={Show}>Submit</button>
      </form>
    </div>
  );
}

export default App;