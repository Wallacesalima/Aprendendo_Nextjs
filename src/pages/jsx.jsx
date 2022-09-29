export default function Jsx() {

    const title = <h1>JSX é um conceito central</h1>

    function subtitle() {
        return <h2>{" Javascript dentro de {}".toUpperCase()}</h2>
    }

    return (
        <div>
            {/* É usado {} para usar javascript dentro do techo do código react. */}
            {title}
            {subtitle()}
            
            <p>
                {JSON.stringify({ nome: 'Wallace', idade: 23 })}
            </p>
        </div>
    )
}