

export default function Estilo(props) {
    const classeAplicada = props.numero >= 0 ? "azul" : "vermelho";
    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2d3" : "#d22",
                color: props.color,
                textAlign: props.center ? "center" : "left"
            }}>
                Lorem, ipsum.
            </h1>
            <h2 className={classeAplicada}>Lorem ipsum dolor sit.</h2>
        </div>
    )
}