import Titulo from '../../../components/Titulo'

export default function usandoTitulo() {
    return(
        <div>
             <Titulo 
                principal="Página de Cadastro" 
                descricao="Incluir, alterar e excluir coisas!"
            />

            <Titulo 
                principal="Página Login" 
                descricao="Informe email senha"
                pequeno // Atributo sozinho  o next entendo como verdadeiro
            />
        </div>
    )
}