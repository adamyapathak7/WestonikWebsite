
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
