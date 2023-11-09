import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function AgregarEquipo() {

    let navigate = useNavigate()


    const [equipo, setEquipo] = useState({
        nombre: "",
        descripcion: "",
        estado: ""
    })

    const { nombre, descripcion, estado } = equipo;

    const onInputChange=(e)=>{

        setEquipo({...equipo,[e.target.name]:e.target.value})

    };

    const onSubmit = async (e) => {

        e.preventDefault();
        await axios.post('http://localhost:8080/equipo',equipo);
        navigate("/");
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Registrar Equipo Nuevo</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>
                            Nombre
                        </label>
                        <input 
                        type={'text'} 
                        className='form-control' 
                        placeholder='Nombre del equipo' 
                        name='nombre'
                        value={nombre}
                        onChange={(e) => onInputChange(e)} 
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Description' className='form-label'>
                            Descripcion
                        </label>
                        <input type={"text"} className='form-control' placeholder='Descripcion del equipo' name='descripcion' value={descripcion} onChange={(e)=>onInputChange(e)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Status' className='form-label'>
                            Estado
                        </label>
                        <input type={"text"} className='form-control' placeholder='Estado del Equipo' name='estado' value={estado} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Registrar</button>
                    <button type='submit' className='btn btn-outline-danger mx-2' >Cancelar</button>
                    </form>

                </div>
            </div>


        </div>
    )
}
