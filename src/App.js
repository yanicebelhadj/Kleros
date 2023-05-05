import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from './routes/HomePage/HomePage.jsx'
import Actualites from './routes/Actualites/Actualites.jsx'
import Contact from './routes/Contact/Contact.jsx'
import IdentiteValeurs from './routes/IdentiteValeurs/IdentiteValeurs.jsx'
import Publications from './routes/Publications/Publications.jsx'
import SavoirFaire from './routes/SavoirFaire/SavoirFaire.jsx'
import Header from './components/Header/Header.jsx';
import ArticleActualitePage from './routes/ArticleActualitePage/ArticleActualitePage.jsx';
import ArticlePublicationPage from './routes/ArticlePublicationPage/ArticlePublicationPage.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/IdentiteValeurs' exact element={<IdentiteValeurs />} />
          <Route path='/Actualites' exact element={<Actualites />} />
          <Route path='/Actualites/:id' exact element={<ArticleActualitePage />} />          
          <Route path='/Contact' exact element={<Contact />} />
          <Route path='/Publications' exact element={<Publications />} />
          <Route path='/Publications/:id' exact element={<ArticlePublicationPage />} />          
          <Route path='/SavoirFaire' exact element={<SavoirFaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
