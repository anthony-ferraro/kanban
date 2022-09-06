import React, { useState } from 'react'
import styles from '../styles/Sidebar.module.css';
import BoardsList from './BoardsList';
import IconLogoDark from './IconLogoDark';
import IconLogoLight from './IconLogoLight';
import IconHideSidebar from './IconHideSidebar';
import Image from 'next/image';
import Switch from './Switch';
const Sidebar = ({ data, activeBoard, setActiveBoard, sidebarVisible, setSidebarVisible, theme, setTheme }) => {
  return (
    <div className={`${styles.sidebar} ${!sidebarVisible ? styles.hidden : ""}`}>
      <div className={styles.top}>
        <div className={styles.logo}>
          {theme ? <IconLogoLight width="160px" height="25px"></IconLogoLight> : <IconLogoDark width="160px" height="25px"></IconLogoDark>}
        </div>
        <BoardsList activeBoard={activeBoard} setActiveBoard={setActiveBoard} data={data}></BoardsList>
      </div>
      <div className={styles.bottom}>
        <div className={styles.toggleThemePanel}>
          <Image src="/assets/icon-light-theme.svg" width="18px" height="18px"></Image>
          <Switch toggleState={theme} onToggle={() => setTheme(!theme)}></Switch>
          <Image src="/assets/icon-dark-theme.svg" width="15px" height="15px"></Image>
        </div>
        <button className={styles.hideSidebarButton} onClick={() => setSidebarVisible(false)}>
          <IconHideSidebar width="18px" height="16px" fill="#000000"></IconHideSidebar>
          <p>Hide Sidebar</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar