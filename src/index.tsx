// Project Root
import { h, Fragment, render } from 'preact'
import { Router, Route } from 'preact-router'

// Import Components
import Navigation from './components/Navigation'
import HelloWorld from './components/HelloWorld'

const home = () => <div>Home Route</div>
const about = () => <div>About Route</div>

function Root() {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Route path='/hello' component={HelloWorld} />
        <Route path='/about' component={about} />
        <Route path='/' component={home} />
      </Router>
    </Fragment>
  )
}

const root = document.getElementById('app')
if (root != null) {
  render(<Root />, root)
}
