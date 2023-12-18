import { useState } from "react";

export default function mouse() {
  
  // React Hooks
  const [x, setX] = useState(0);
 

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1]

  const style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fcfcfc",
    color: "#000",
    height: "100vh"
  } 

  function quandoMover(ev) {
    setX(ev.clientX);
    alterarY(ev.clientY);
  }

  return(
    <div style={style} onMouseMove={quandoMover}>
       <span>Eixo X: {x}</span>
       <span>Eixo Y: {y}</span>
    </div>
  )
}