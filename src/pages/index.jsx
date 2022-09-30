import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Initial() {
  return (
    // estilo interno
    // primeiro par de chaves representa código javascript
    // segundo par de chaves representa um objeto
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#0b99bd" />
      <Navegador texto="Jsx" destino="/jsx" cor="blue" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/cliente/SP/1" cor="red" />
    </div>
  )
}