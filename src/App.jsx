import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VoiceCloning from "./pages/VoiceCloning";
import IA from "./pages/IA";
import Maintenance from "./pages/Maintenance";
import GlobalStyles from "./styles/GlobalStyle";


const AppWrapper = styled.div`
  /* Agrega tus estilos aquí */
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppWrapper>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/VoiceCloning' element={<VoiceCloning />} />
          <Route exact path='/IA' element={<IA />} />
          <Route exact path='/Maintenance' element={<Maintenance />} />
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
