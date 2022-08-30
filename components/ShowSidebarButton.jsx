import React from 'react'
import styles from '../styles/ShowSidebarButton.module.css';
import Image from 'next/image';
const ShowSidebarButton = ({setSidebarVisible}) => {
  return (
    <button className={styles.showSidebarButton} onClick={() => setSidebarVisible(true)}>
        <Image src="/assets/icon-show-sidebar.svg" width="16px" height="10.22px"></Image>
    </button>
  )
}

export default ShowSidebarButton