import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'

export default function ClientePorCodigo() {

    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica" >
            <div style={{
                backgroundColor: "red",
                height: "100vh"
            }}>
                <h1> Código = {router.query.codigo} </h1>
                <h1> filial = {router.query.filial} </h1>
            </div>
        </Layout>
    )
}