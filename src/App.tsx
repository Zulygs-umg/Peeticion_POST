import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cursos from "./vistas/PeticionPost";
import Estudiante from "./vistas/Estudiantes";
import Layout from "./vistas/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {}
        <Route path="BuscarEstudiante" element={<Estudiante />} />
        <Route path="IngresarCurso" element={<Cursos />} />
      </Route>
    </Routes>
  );
}

export default App;
