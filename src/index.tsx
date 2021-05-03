// Project Root
import { h, render } from 'preact'

export default function App() {
  return (
    <div>Hello Preact!!!</div>
  )
}

const root = document.getElementById('app')
if(root != null) {
  render(<App />, root)
}
