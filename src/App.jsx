import styled from 'styled-components';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VoiceCloning from './pages/VoiceCloning';
import IA from './pages/IA';
import Maintenance from './pages/Maintenance';
import GlobalStyles from './styles/GlobalStyle';
import Modal from './components/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Tts from './pages/TTS';
import { Suspense } from 'react';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import AboutUs from './pages/AboutUs';

const AppWrapper = styled.div``;

function App() {
  const modalType = useSelector((state) => state.modal.modalType);
  useEffect(() => {}, [modalType]);
  return (
    <Suspense>
      <Router>
        <Modal />
        <GlobalStyles />
        <AppWrapper>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/voice-cloning" element={<VoiceCloning />} />
            <Route exact path="/ia" element={<IA />} />
            <Route exact path="/tts" element={<Tts />} />
            <Route exact path="/maintenance" element={<Maintenance />} />
            <Route exact path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </AppWrapper>
      </Router>
    </Suspense>
  );
}

export default App;
