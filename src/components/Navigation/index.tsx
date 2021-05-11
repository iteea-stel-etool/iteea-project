// Navigation Component
import { h } from 'preact'
import { useState } from 'preact/hooks'
import cx from 'classnames'

// Import Styling
import styles from './style.module.css'

// Import Images
import IteeaLogo from '../../../public/iteea.ico'

export default function Navigation() {
  const [display, setDisplay] = useState(false)
  const menuButtonClick = () => setDisplay(!display)

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img src={IteeaLogo} alt='Iteea Logo' />
        <p>ITEEA Stel eTool</p>
        <div
          className={cx(styles.menu, { [styles.animateBtn]: display })}
          onClick={menuButtonClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <section
        className={cx(styles.navLinks, { [styles.animateNav]: display })}
      >
        <ul>
          <li onClick={menuButtonClick}>
            <a href='/'>Home</a>
          </li>
          <li onClick={menuButtonClick}>
            <a href='/about'>About Page</a>
          </li>
          <li onClick={menuButtonClick}>
            <a href='/hello'>Hello</a>
          </li>
        </ul>
      </section>
    </nav>
  )
}
