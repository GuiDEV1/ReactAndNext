
export default function jsx4() {
    const subititulo = "Migrei com sucesso JSX";
    let n1 = 10, n2 = 20, n3 = 40;
    return (
        <div>
            <h1>Integracão js para JSX</h1>
            <h2>{subititulo}</h2>
            <h3>{4 + 4}</h3>
            <h4>{Math.max(n1,n2,n3)}</h4>
            <h5>{MenorMaior(9,1,10)}</h5>
        </div>
    )
}

function MenorMaior(valor, min, max) {
    if(valor >= min && valor <= max) {
       return "sim"
    }
    else {
       return "Não" 
    }
}