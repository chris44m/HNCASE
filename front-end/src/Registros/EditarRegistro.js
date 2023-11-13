import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditarRegistro() {
    let navigate = useNavigate();
    const { salidaId } = useParams();

    const [registro, setRegistro] = useState({
        equipo: '', // Campo de tipo select para elegir un equipo
        codequipo: '', // Campo de tipo select para elegir un código de equipo
        area: '', // Campo de tipo select para elegir un área
        fechaSalida: '',
        razon: '',
    });

    const [equipos, setEquipos] = useState([]); // Para almacenar la lista de equipos disponibles
    const [areas, setAreas] = useState([]); // Para almacenar la lista de áreas disponibles

    useEffect(() => {
        loadRegistro();
        loadEquipos();
        loadAreas();
    }, []);

    const loadRegistro = async () => {
        const result = await axios.get(`http://localhost:8080/salidaequipo/${salidaId}`);
        setRegistro(result.data);
    };

    const loadEquipos = async () => {
        const result = await axios.get('http://localhost:8080/equipos');
        setEquipos(result.data);
    };

    const loadAreas = async () => {
        // Puedes cargar la lista de áreas de la misma manera que se hizo para los equipos
    };

    const { equipo, codequipo, area, fechaSalida, razon } = registro;

    const onInputChange = (e) => {
        setRegistro({ ...registro, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/salidaequipo/${salidaId}`, registro);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Editar Registro de Salida de Equipo</h2>

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
                        {/* Campo de área */}
                        <div className='mb-3'>
                            <label htmlFor='area' className='form-label'>
                                Área
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                name='area'
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
                            Guardar Cambios
                        </button>
                    </form>

                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancelar
                    </Link>
                </div>
            </div>
        </div>
    );
}
