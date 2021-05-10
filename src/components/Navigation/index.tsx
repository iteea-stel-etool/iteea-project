// Navigation Component
import { h } from 'preact'

// Import Styling
import styles from './style.module.css'

// Import Images
import IteeaLogo from '../../../public/iteea.ico'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img src={IteeaLogo} alt='Iteea Logo' />
        <p>ITEEA Stel eTool</p>
        <div className={styles.menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <section className={styles.navLinks}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About Page</a>
          </li>
          <li>
            <a href='/hello'>Hello</a>
          </li>
        </ul>
      </section>
    </nav>
  )
}
