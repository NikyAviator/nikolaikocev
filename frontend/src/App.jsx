import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/scss/styles.scss';
import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer';
import RandomColor from './Components/random-color/RandomColor.jsx';
import Images from './Pages/Images.jsx';
import LoadData from './Pages/LoadData.jsx';
import TreeViewPage from './Pages/TreeViewPage.jsx';
import QrCodePage from './Pages/QrCodePage.jsx';
import LightDarkPage from './Pages/LightDarkPage.jsx';
import ScrollIndicatorPage from './Pages/ScrollIndicatorPage.jsx';
import TabsPage from './Pages/TabsPage.jsx';
import GithubProfilePage from './Pages/GithubProfilePage.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import TTTPage from './Pages/TTTPage.jsx';
import FeatureFlagPage from './Pages/FeatureFlagPage.jsx';
import CustomHooksPage from './Pages/CustomHooksPage.jsx';
import ScrollToTopAndBottomPage from './Pages/ScrollToTopAndBottomPage.jsx';
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
            <Route path='/treeview' element={<TreeViewPage />} />
            <Route path='/qrcode' element={<QrCodePage />} />
            <Route path='/toggletheme' element={<LightDarkPage />} />
            <Route path='/scrollindicator' element={<ScrollIndicatorPage />} />
            <Route path='/tabs' element={<TabsPage />} />
            <Route path='/githubprofiler' element={<GithubProfilePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/tictactoe' element={<TTTPage />} />
            <Route path='/ffpage' element={<FeatureFlagPage />} />
            <Route path='/customhooks' element={<CustomHooksPage />} />
            <Route
              path='/scrolltopbottom'
              element={<ScrollToTopAndBottomPage />}
            />
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
