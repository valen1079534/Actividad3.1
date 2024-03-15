import './App.css'
import React, {  useRef } from "react";
import axios from "axios";

const baseURL = "localhost:4000/usuario/registrar"

function App(){

        const cedula = useRef(null)
        const nombre = useRef(null)
        const telefono  = useRef(null)
        const correo = useRef(null)
        const descripcion = useRef(null)
        const password = useRef(null)
        const fechaNacimiento = useRef(null)
        const rolUsuario = useRef(null)

        const funcion = async (e) => 
        {
            e.preventDefault()
        }
        
        try {
        const registrarUser = {
            pk_cedula_user: pk_cedula_user.current.value,
            nombre:nombre.current.value,
            telefono: telefono.current.value,
            correo: correo.current.value,
            descripcion: descripcion.current.value,
            fechaNacimiento: fechaNacimiento.current.value,
            rolUsuario: rolUsuario.current.value
        }

           axios.post(baseURL, {headers:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJwa19jZWR1bGFfdXNlciI6MTA4MDAwNzAwLCJub21icmVfdXNlciI6IlBlcGl0byIsImVtYWlsX3VzZXIiOiJwZXBpdG9AaG90bWFpbC5jb20iLCJwYXNzd29yZF91c2VyIjoiNzM4MmIiLCJkZXNjcmlwY2lvbl91c2VyIjoiaG9sYSwgZXN0YSBmdW5jaW9uYW5kbyA_IiwiaW1hZ2VuX3VzZXIiOm51bGwsInRlbGVmb25vX3VzZXIiOiIzMjA3MzgzIiwiZmVjaGFfbmFjaW1pZW50b191c2VyIjoiMjAwNS0wMi0wMVQwNTowMDowMC4wMDBaIiwicm9sX3VzZXIiOiJhZG1pbiIsImVzdGFkb191c2VyIjpudWxsfV0sImlhdCI6MTcwOTkzMDU3OCwiZXhwIjoxNzEwMDE2OTc4fQ.XQY5oenq4BT4fr6Pk_834cTePKtkTxqfjfdh8WhldJY"}},

           registrarUser).then((response) =>{
            console.log(response.data)
           })

        } catch (error) {
            console.log('NOT', error)
        }

        return(
        <form onSubmit={funcion}>

            <input type="number" placeholder="cedula" value={cedula} onChange={(e) => (e.target.value)}/>
            <input type="text" placeholder="nombre" value={nombre} onChange={(e) => (e.target.value)} required/>
            <input type="text" placeholder="telefono" value={telefono} onChange={(e) => (e.target.value)} required/>
            <input type="email" placeholder="correo" value={correo} onChange={(e) => (e.target.value)} required/>
            <input type="password" placeholder="password" value={password} onChange={(e) =>(e.target.value)} required/> 
            <input type="date" placeholder="fecha_nacimiento" value={fechaNacimiento} onChange={(e) => (e.target.value)} required/>

            <select type="text" placeholder="rol usuario" value={rolUsuario} onChange={(e) => (e.target.value)} required>
                <option>Vendedor</option>
                <option>comprador</option>
            </select>

            <input type="text"  placeholder='Descripcion' value={descripcion} onChange={(e) = (e.target.value)}/>

            <button type='submit'>Registrarse</button>
        </form>
    )
}

export default App
