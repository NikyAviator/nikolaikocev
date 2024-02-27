import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/scss/styles.scss';

import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer';
import RandomColor from './Components/random-color/RandomColor.jsx';
import Images from './Pages/Images.jsx';
import LoadData from './Pages/LoadData.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/randomcolor' element={<RandomColor />} />
            <Route path='/imageslider' element={<Images />} />
            <Route path='/loadmoredata' element={<LoadData />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
