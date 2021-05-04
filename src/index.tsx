// Project Root
import { h, render } from 'preact'

// Import Hello World Component
import HelloWorld from './components/HelloWorld'

const root = document.getElementById('app')
if (root != null) {
  render(<HelloWorld />, root)
}
