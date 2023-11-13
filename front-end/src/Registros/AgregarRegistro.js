import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AgregarRegistro() {
  const navigate = useNavigate();

  const [registro, setRegistro] = useState({
    equipo: '',
    codequipo: '',
    area: '',
    fechaSalida: '',
    razon: '',
  });

  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/equipos')
      .then(response => {
        setEquipos(response.data);
      })
      .catch(error => {
        console.error('Error al cargar la lista de equipos: ', error);
      });
  }, []);

  const { equipo, codequipo, area, fechaSalida, razon } = registro;

  const onInputChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/salidaequipo', registro);
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Registrar Salida de Equipo</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="equipo" className="form-label">
                Equipo
              </label>
              <select
                className="form-control"
                name="equipo"
                value={equipo}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Selecciona un equipo</option>
                {equipos.map((equipo) => (
                  <option key={equipo.equipoId} value={equipo.nombre}>
                    {equipo.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="codequipo" className="form-label">
                Código de Equipo
              </label>
              <select
                className="form-control"
                name="codequipo"
                value={codequipo}
                onChange={(e) => onInputChange(e)}
              >
                <option value="">Selecciona un código de equipo</option>
                {equipos.map((equipo) => (
                  <option key={equipo.equipoId} value={equipo.equipoId}>
                    {equipo.equipoId}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="razon" className="form-label">
                Area
              </label>
              <textarea
                className="form-control"
                name="area"
                value={area}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fechaSalida" className="form-label">
                Fecha de Salida
              </label>
              <input
                type="date"
                className="form-control"
                name="fechaSalida"
                value={fechaSalida}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="razon" className="form-label">
                Razón
              </label>
              <textarea
                className="form-control"
                name="razon"
                value={razon}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Registrar
            </button>
          </form>

          <Link className="btn btn-outline-danger mx-2" to="/registros">
            Cancelar
          </Link>
        </div>
      </div>
    </div>
  );
}
