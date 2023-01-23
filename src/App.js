import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchWordPanel from './components/SearchWordPanel';
import SavedWordPanel from './components/SavedWordPanel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/saved" element={<SavedWordPanel/>} />
        <Route path="/" element={<SearchWordPanel/>} />
      </Routes>
    </div>
  );
}

export default App;
