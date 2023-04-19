import "./Formulario.css"
import { useState } from "react"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvios = (event) => {
        event.preventDefault()
        let datosAenviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAenviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="Formulario">
        <form onSubmit={manejarEnvios}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre} 
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos = {props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo} 
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar el Color en Hexadecimal" 
            required 
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario