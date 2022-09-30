import Layout from "../components/Layout"

export default function Jsx() {

    const title = <h1>JSX é um conceito central</h1>

    function subtitle() {
        return <h2>{" Javascript dentro de {}".toUpperCase()}</h2>
    }

    return (

        <Layout titulo="Entendendo o JSX">
            <div style={{
                backgroundColor: "blue",
                height: "100vh"
            }}>
                {/* É usado {} para usar javascript dentro do techo do código react. */}
                {title}
                {subtitle()}
            </div>
        </Layout>
    )
}