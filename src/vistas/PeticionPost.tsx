import React, { useState } from "react";
import axios from "axios";
import "../assets/css/StylePost.css";

const CursoForm = () => {
  const [curso, setCurso] = useState({
    nombre: "",
    creditos: "",
    descripcion: "",
  });

  const MCambio = ({ target: { name, value } }) => {
    setCurso((prev) => ({ ...prev, [name]: value }));
  };

  const MEnvio = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://test-deploy-12.onrender.com/cursos", curso, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Curso ingresado correctamente");
      setCurso({ nombre: "", creditos: "", descripcion: "" });
    } catch (error) {
      alert("Error al ingresar el curso");
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Curso</h2>
      <form onSubmit={MEnvio} className="form">
        {["nombre", "creditos", "descripcion"].map((field, index) => (
          <div key={field} className="inputGroup">
            <label className="label">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            {field === "descripcion" ? (
              <textarea
                name={field}
                value={curso[field]}
                onChange={MCambio}
                required
                className="textarea"
              />
            ) : (
              <input
                type={field === "creditos" ? "number" : "text"}
                name={field}
                value={curso[field]}
                onChange={MCambio}
                required
                className="input"
              />
            )}
          </div>
        ))}
        <button type="submit" className="button">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default CursoForm;
