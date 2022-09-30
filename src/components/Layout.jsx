import Link from "next/link"
import Styles from "../styles/Layout.module.css"
import Cabecalho from "./Cabecalho"

export default function Layout(props) {
    return (
        <div className={Styles.layout}>
            <div className={Styles.cabecalho}>
                {/* <h1>{Cabecalho}</h1> */}
                <h1>{props.titulo ?? "Mais um exemplo!!"}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={Styles.conteudo}>
                {props.children}
            </div>

        </div>
    )
}