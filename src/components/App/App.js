import './App.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const [result, setResult] = useState("");
  console.log(result);

  const handleSearch = (input) => {
    setResult(input);
    // this.refs.input.value = '';
    setInput( setInput({
            input: ''
        }));
  }

  const [input, setInput] = useState({
    input: ""
  });
    console.log(input);
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
