
export default function lista01() {
    let lista = [
        <span>1 ,</span>,
        <span>2 ,</span>,
        <span>3 ,</span>,
        <span>4 ,</span>,
        <span>5 ,</span>,
        <span>6 ,</span>,
        <span>7 ,</span>,
        <span>8 ,</span>,
        <span>9 ,</span>,
        <span>10 ,</span>
    ]
    return(
        <div>
            <h1>Lista1</h1>
             {gerarLista(5)}
        </div>
    )
}

//solução automatizada
function gerarLista(final = 10) {
    const lista = []
    for(let i = 1; i <= final;i++){
      lista.push(<span>{i} ,</span>)
    }
    return lista 
}