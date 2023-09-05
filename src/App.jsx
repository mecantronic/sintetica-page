import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const AppWrapper = styled.div`
  /* Agrega tus estilos aquí */
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </AppWrapper>
    </Router>
  );
}

export default App;
