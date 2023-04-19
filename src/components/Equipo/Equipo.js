import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //Destructuración
    const {colorPrimario, titulo, id} = props.datos

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const sc = {
        backgroundColor: hexToRgba(colorPrimario, 0.3)
    }

    const pc = {
        borderColor: colorPrimario
    }

    return <>
        { colaboradores.length > 0 &&
            <section className="Equipo" style={sc}>
                <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={ (evento) => {
                    actualizarColor(evento.target.value, id)
                }}
                />
                <h3 style={pc}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo