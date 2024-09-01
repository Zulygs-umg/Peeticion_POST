import { useEffect, useState } from "react";
import "../assets/css/style.css";

function Estudiante() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Para el Carnet
  const [selectedEstudiante, setSelectedEstudiante] = useState(null); // Para mostrar el estudiante encontrado
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://test-deploy-12.onrender.com/estudiantes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data); // Asume que los datos están en data.Alumnos
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  const handleSearch = () => {
    const alumno = posts.find((post) => post.Carnet === searchTerm);
    if (alumno) {
      setSelectedEstudiante(alumno);
    } else {
      setSelectedEstudiante(null);
      alert("Alumno no encontrado");
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedEstudiante(null);
  };

  return (
    <div className="form-container">
      <h1>Consulta de alumnos</h1>
      {error && <p>Error al cargar los datos: {error}</p>}

      <div className="form-group">
        <label>Carnet:</label>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Nombres:</label>
        <input
          type="text"
          value={selectedEstudiante ? selectedEstudiante.Estudiante : ""}
          disabled
        />
      </div>

      <div className="form-group">
        <label>Correo Electrónico:</label>
        <input
          type="text"
          value={selectedEstudiante ? selectedEstudiante.Email : ""}
          disabled
        />
      </div>

      <div className="form-group">
        <label>Sección:</label>
        <input
          type="text"
          value={selectedEstudiante ? selectedEstudiante.Seccion : ""}
          disabled
        />
      </div>

      <div className="button-group">
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClear}>Limpiar</button>
        <button onClick={() => window.location.reload()}>Cancelar</button>
      </div>
    </div>
  );
}

export default Estudiante;
