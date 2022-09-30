import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        // <div>
        //     < Cabecalho />
        //     < Cabecalho />
        // </div>
        <Layout titulo="Usando componentes">
            <div style={{
                backgroundColor: "#0b99bd",
                height: "100vh"
            }}>
                < Cabecalho titulo="Next.js & React" />
                < Cabecalho subtitulo="Aprendendo Next na prática" />
            </div>
        </Layout>
    )
}