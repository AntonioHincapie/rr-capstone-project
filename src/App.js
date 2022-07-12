import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
