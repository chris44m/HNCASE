import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

    const [equipos, setEquipos] = useState([]);

    useEffect(() => {
        loadEquipos();
    }, []);

    const loadEquipos = async () => {
        const result = await axios.get("http://localhost:8080/equipos")
        setEquipos(result.data);
    }



    return (
        <div className='container'>
            <div >
                <Link to='/agregarequipos' className='btn btn-outline-primary btn-lg'>Agregar Equipos</Link>
            </div>
            <div className='py-4'>

                <table class="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipos.map((equipo, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{equipo.nombre}</td>
                                    <td>{equipo.descripcion}</td>
                                    <td>{equipo.estado} </td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>Ver</button>
                                        <button className='btn btn-outline-primary mx-2'>Editar</button>
                                        <button className='btn btn-danger mx-2'>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default Home