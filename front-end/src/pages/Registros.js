import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Registros() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    loadRegistros();
  }, []);

  const loadRegistros = async () => {
    const result = await axios.get("http://localhost:8080/salidasequipos");
    setRegistros(result.data);
  }

  const deleteRegistro = async (salidaId) => {
    await axios.delete(`http://localhost:8080/salidaequipo/${salidaId}`);
    loadRegistros();
  }

  return (
    <div className="container">
        <div >
                <Link to='/agregarregistro' className='btn btn-outline-primary btn-lg'>Agregar Registro de Salida</Link>
            </div>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Equipo</th>
              <th scope="col">Código de Equipo</th>
              <th scope="col">Área</th>
              <th scope="col">Fecha de Salida</th>
              <th scope="col">Razón</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={registro.salidaId}>
                <th scope="row">{index + 1}</th>
                <td>{registro.equipo}</td>
                <td>{registro.codequipo}</td>
                <td>{registro.area}</td>
                <td>{registro.fechaSalida}</td>
                <td>{registro.razon}</td>
                <td>
                  <Link to={`/verregistro/${registro.salidaId}`} className="btn btn-primary mx-2">
                    Ver
                  </Link>
                  <Link to={`/editarregistro/${registro.salidaId}`} className="btn btn-outline-primary mx-2">
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteRegistro(registro.salidaId)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Registros;
