import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details/Details';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
