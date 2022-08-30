import React from 'react'
import styles from '../styles/Sidebar.module.css';
import Image from 'next/image';
import BoardsList from './BoardsList';
const Sidebar = ({ data, activeBoard, setActiveBoard }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image src="/assets/logo-dark.svg" width="150px" height="25px"></Image>
        </div>
        <BoardsList activeBoard={activeBoard} setActiveBoard={setActiveBoard} data={data}></BoardsList>
      </div>
    </div>
  )
}

export default Sidebar