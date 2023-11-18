//Minha solucão
export default function Tabuleiro() {
    return (
        <div>
           <h1 className="font-bold text-white text-center text-3xl mt-3">Tabuleiro ♟</h1>
           {/* Div responsável pela contrução do tabuleiro */}
           <div className="mx-auto text-white w-[400px] md:w-[625px] grid grid-cols-8 mt-16">
              {montarTabuleiro()}
           </div>
        </div>
    )
}

function montarTabuleiro() {
    const casasBrancas = [], casasPretas =[];
    for(let i = 1; i <= 4; i++) {
       casasBrancas.push(<div className='casasBrancas'></div>,<div className='casasPretas'></div>);
       casasPretas.push(<div className='casasPretas'></div>,<div className='casasBrancas'></div>);
    }
    const casas = [casasBrancas,casasPretas];
    const tabuleiro = casas.concat(casas,casas,casas);
    return tabuleiro 
 }
 