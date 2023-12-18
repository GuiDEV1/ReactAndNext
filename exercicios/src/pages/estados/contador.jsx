import { useState } from "react"

export default function contador() {

let [number,setNumber] = useState(0);    
   
const stylePai = {
    background: "#fdfdfd",
    height: "100vh",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

const button = {
    padding: "22px",
    color: "#000",
    fontSize: "25px",
    marginTop: "13px"
}

const somarValor = () => { return setNumber(++number) };

const subtrairValor = () => { number === 0 ? alert("Erro o numero é negativo") : setNumber(--number) } 

 return (
    <div style={stylePai}>

        <div>
            <h1>Contador</h1>
            <div style={{fontSize: "25px"}}>valor: {number}</div>
        </div>
        
        <div>
            <button style={button} onClick={subtrairValor}>-</button>
            <button style={button} onClick={somarValor}>+</button>
        </div>
    </div>
 )
}