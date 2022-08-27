import React from 'react'
import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <Image src="/assets/logo-dark.svg" width="150px" height="25px"></Image>
            </div>
        </div>
    </div>
  )
}

export default Sidebar