
// Style css
import './App.css'

// Import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Home page
import Home from './pages/Home';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* Home router */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<h1>Sobre nós</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
