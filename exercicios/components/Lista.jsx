

export default function Lista(props) {
    return (
        <div>
            <h1>Lista Exemplo</h1>
            <ul style={{
                margin: "23px",
                listStyle: "none",
                padding: 0
            }}>
                {props.children}
            </ul>
        </div>
    )
}