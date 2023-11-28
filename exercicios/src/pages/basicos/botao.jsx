function acao1() {
    console.log("Botão foi pressionado");
}

export default function botao() {

    function acao2() {
        console.log("Botão 2 foi pressionado");
     }

    return(
        <>
          <button onClick={acao1}>Click #01</button>
          <button onClick={acao2}>Click #02</button>  
          <button onClick={() => console.log("botão 3 foi pressionado")}>Botão #3</button>    
          
          <div>
          <input type="text" onChange={e => console.log(e.target.value)} />
          </div>
        </>
    )
}



