
export default function megasena1() {
const styleDefault = {
    backgroundColor: "#fafafa",
    height: "100vh",
    color: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}
const styleButton = {
    background: "purple",
    fontSize: "1rem",
    padding: "0.5rem",
    borderRadius: "40px"
}
const syleRes = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    borderRadius: "50px",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "2rem",
    margin: "12px"
}

 return(
    <div style={styleDefault}>
        <h1>Mega Sena</h1>
        <div id="res" style={{display: "flex"}}>
           
        </div>
        <button onClick={gerarSorteio} style={styleButton}>Gerar resultado</button>
    </div>
 )
}

function gerarSorteio() {
    return document.getElementById("res").innerHTML += "<div style={syleRes}>2</div>";
}
