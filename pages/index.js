import Card from './components/Card'
import Card2 from './components/Card2'
import Card3 from './components/Card3'

export default function IndexPage() {
  return (
    <div style={{
      display: "inline-flex"
    }}>
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
