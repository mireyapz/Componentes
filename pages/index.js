import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Productos from './components/cProductos'

export default function IndexPage() {
  return (
    <div style={{
      display: "flex"
    }}>
      <div>
        <Productos/>
      </div>

      <div>
        <Card3/>
      </div>

      <div>
        <Card2/>
      </div>

      <div>
        <Card/>
      </div>
    </div>
  )
}
