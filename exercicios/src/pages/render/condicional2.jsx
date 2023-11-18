import If from "../../../components/If";

export default function condicional2() {
    const numero = 2;
    return(
        <div>
            <If teste={numero % 2 === 0}>
                <h3>O número: {numero} é par</h3>
            </If>
            <If teste={numero % 2 === 1}>
                <h3>O número: {numero} é Impar</h3>
            </If>
        </div>
    )
}