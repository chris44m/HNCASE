import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <div className="wrapper">
        <div className="logo">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2QlH4f3NKGSai6FKFQUgrhP8v136oQRs3A&usqp=CAU" alt=""/>
        </div>
        <div className="text-center mt-4 name">
            Central de Esterilización
        </div>
        <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Usuario"/>
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Contraseña"/>
            </div>
            <button className="btn mt-3">Ingresar</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Olvidaste tu Contraseña?</a> o <a href="#">Registrate</a>
        </div>
    </div>
    </div>
  )
}
