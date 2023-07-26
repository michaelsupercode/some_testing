import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Weather from './pages/Weather';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/:frosch' element={<Profile />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
