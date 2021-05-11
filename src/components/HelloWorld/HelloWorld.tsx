// Hello World Component
import { h } from 'preact'
import styles from './style.module.css'

export default function HelloWorld() {
  return (
    <div onClick={() => console.log('tag')} className={styles.text}>
      Hello Preact!!!
    </div>
  )
}
