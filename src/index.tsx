// Project Root
import { h, render } from 'preact'
import { Router, Route } from 'preact-router'

// Import Hello World Component
import HelloWorld from './components/HelloWorld'

function Root() {
  return (
    <Router>
      <Route path='/' component={HelloWorld} />
    </Router>
  )
}

const root = document.getElementById('app')
if (root != null) {
  render(<Root />, root)
}
