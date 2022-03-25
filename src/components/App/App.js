import './App.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const [result, setResult] = useState("");

  const handleSearch = (input) => {
    setResult(input);
    setInput( setInput({
            input: ''
        }));
  }

  const [input, setInput] = useState({
    input: ""
  });
    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }
  return (
  <React.StrictMode>
    <Header
      handleSearch={handleSearch}
      handleChange={handleChange}
      input={input}
    ></Header>
    <Main
      result={result.input}
    ></Main>
  </React.StrictMode>
  );
}

export default App;
