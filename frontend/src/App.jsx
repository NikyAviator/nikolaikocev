import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/scss/styles.scss';

import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer';
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
