// Project Root
import { h, render } from 'preact'
import { Router, Route } from 'preact-router'

// Import Root Styling
import styles from './index.css'

// Import Components
import Navigation from './components/Navigation'
import HelloWorld from './components/HelloWorld/HelloWorld'

const home = () => <div>Home Route</div>
const about = () => <div>About Route</div>

function Root() {
  return (
    <main className={styles.wrapper}>
      <Navigation />
      <div className={styles.container}>
        <Router>
          <Route path='/hello' component={HelloWorld} />
          <Route path='/about' component={about} />
          <Route path='/' component={home} />
        </Router>
      </div>
    </main>
  )
}

const root = document.getElementById('app')
if (root != null) {
  render(<Root />, root)
}
