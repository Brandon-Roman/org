import { useState } from "react";
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

     return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" 
            placeholder="ingresar nombre" 
            required 
            valor = {nombre} 
            actualizarValor={actualizarNombre}
            />
            <Campo 
            titulo="Puesto" 
            placeholder="ingresar puesto" 
            required
            valor = {puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="ingresar enlace de foto" 
            required
            valor = {foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor = {equipo}
            actualizarEquipo = {actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton>
                crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="ingresar titulo" 
            required 
            valor = {titulo} 
            actualizarValor={actualizarTitulo}
            />
            <Campo 
            titulo="Color" 
            placeholder="ingresar color en hex" 
            required
            valor = {color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
     </section>
}

export default Formulario