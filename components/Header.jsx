import React from 'react'
import styles from '../styles/Header.module.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
const Header = ({data, activeBoard}) => {
    return (
        <div className={styles.header}>
            <p className="heading-XL">
                {(() => {
                    if(data!==undefined) {
                        return data.boards[activeBoard].name
                    } else {
                        return null
                    }
                })()}
            </p>
            <div className={styles.rightWrapper}>
                <button className={styles.newTaskButton}>+ Add New Task</button>
                <span className={styles.verticalDots}>
                    <BsThreeDotsVertical></BsThreeDotsVertical>
                </span>
            </div>
        </div>
    )
}

export default Header