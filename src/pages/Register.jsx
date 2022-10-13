import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import useContextAuth from '../hooks/useContextAuth'
import swal from 'sweetalert2';

const Register = () => {

  const { register } = useContextAuth();

  const navegar = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async(e) => {
    e.preventDefault();

    if ([nombre, email, password].includes('')) {
      swal.fire('Error', 'Todos los Campos son obligatorios', 'error');
      return;
    }

    if (password.length < 3) {
      swal.fire('Error', 'La contraseña debe tener minimo 6 caracteres', 'error');
      return;
    }

    if (nombre.length < 3) {
      swal.fire('Error', 'El nombre debe tener minimo 3 caracteres', 'error');
      return;
    }

    const data = await register(nombre, email, password)

    if (data.ok) {
      swal.fire('En hora Buena!', `${data.msg}`, 'success');
      navegar('/auth')
    } else {
      swal.fire('Error', `${data.msg}`, 'error');
    }

  }

  return (
       <form className="login100-form validate-form flex-sb flex-w"
             onSubmit={ onSubmit } 
       >
            <span className="login100-form-title mb-3">
              Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
              <input className="input100" type="text" name="name" placeholder="Nombre" value={nombre} onChange={ e => setNombre(e.target.value) }/>
              <span className="focus-input100"></span>
            </div>

            
            <div className="wrap-input100 validate-input mb-3">
              <input className="input100" type="email" name="email" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value) }/>
              <span className="focus-input100"></span>
            </div>
            
            
            <div className="wrap-input100 validate-input mb-3">
              <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value) }/>
              <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
              <div className="col text-right">
                <Link to="/auth" className="txt1">
                  Ya tienes cuenta?
                </Link>
              </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
              <button className="login100-form-btn">
                Crear cuenta
              </button>
					</div>

				</form>
  )
}

export default Register