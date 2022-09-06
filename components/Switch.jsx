import React from 'react'
import styles from '../styles/Switch.module.css';
const Switch = ({toggleState, onToggle}) => {
  return (
    <div onClick={() => onToggle()} className={styles.switch}>
        <div className={`${styles.handle} ${toggleState===true ? styles.activated : ""}`}></div>
    </div>
  )
}

export default Switch