import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from './routes/HomePage/HomePage.jsx'
import Actualites from './routes/Actualites.jsx'
import Contact from './routes/Contact.jsx'
import IdentiteValeurs from './routes/IdentiteValeurs/IdentiteValeurs.jsx'
import Publications from './routes/Publications.jsx'
import SavoirFaire from './routes/SavoirFaire/SavoirFaire.jsx'
import Header from './components/Header/Header.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/IdentiteValeurs' exact element={<IdentiteValeurs />} />
          <Route path='/Actualites' exact element={<Actualites />} />
          <Route path='/Contact' exact element={<Contact />} />
          <Route path='/Publications' exact element={<Publications />} />
          <Route path='/SavoirFaire' exact element={<SavoirFaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
