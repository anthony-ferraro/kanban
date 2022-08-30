import React from 'react'
import styles from '../styles/Sidebar.module.css';
import BoardsList from './BoardsList';
import IconLogoDark from './IconLogoDark';
import IconHideSidebar from './IconHideSidebar';
import Image from 'next/image';
import Switch from "react-switch";
const Sidebar = ({ data, activeBoard, setActiveBoard, setSidebarVisible }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <IconLogoDark width="160px" height="25px"></IconLogoDark>
        </div>
        <BoardsList activeBoard={activeBoard} setActiveBoard={setActiveBoard} data={data}></BoardsList>
      </div>
      <div className={styles.bottom}>
        <div className={styles.toggleThemePanel}>
          <Image src="/assets/icon-light-theme.svg" width="18px" height="18px"></Image>
          <div className="switch">
            <Switch offColor="#635FC7" onColor="#635FC7" checkedIcon={false} uncheckedIcon={false} onChange={() => console.log()}></Switch>
          </div>
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