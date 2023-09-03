import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import { Explore } from './components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* {Explore} */}
        <Route path='/listings' element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
