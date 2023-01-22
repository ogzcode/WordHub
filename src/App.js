import { useState } from 'react';
import './App.css';
import data from "./name.json";

function NavBar() {
  return (
    <nav className='nav'>
      <a href="#">Search</a>
      <a href='#'>Saved</a>
    </nav>
  );
}

function SearchBar(props) {
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value !== "") {
      props.onClickForGetValue(value);
      setValue("");
    }
  };

  return (
    <div className='search__bar'>
      <input type="text" value={value} onChange={(e) => handleValueChange(e)} placeholder="Enter word..."/>
      <button onClick={() => handleSubmit()}>Search</button>
    </div>
  );
}

function Word() {
  return (
    <div className='word__box'>
      <div className='word'>
        <div className='header'>
          <p className='word__text'>hello</p>
          <p className='saved'></p>
        </div>
        <div className='type__box'>
          <span className='type'>noun</span>
          <span className='phonetic'>/{"/həˈləʊ/"}/</span>
        </div>
        <p className='definitions'>{"\"Hello!\" or an equivalent greeting."}</p>
        <p className='example'>{"Hello, everyone."}</p>
      </div>
    </div>
  );
}

function App() {
  
  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div className="App">
      <NavBar />
      <div className='search__container'>
        <SearchBar onClickForGetValue={handleSearch}/>
      </div>
      <Word />
    </div>
  );
}

export default App;
