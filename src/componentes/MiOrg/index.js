import {useState} from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // useState    
    //const [nombreVariable, funcionQueActualiza] = useState(valorInicial)
    console.log(props)
    /*const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", !mostrar)
        actualizarMostrar(!mostrar)
    }*/

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg