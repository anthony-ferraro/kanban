import React from 'react'
import styles from '../styles/Header.module.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
const Header = () => {
    return (
        <div className={styles.header}>
            <p className="heading-XL">
                No Boards
            </p>
            <div className={styles.rightWrapper}>
                <button className="button btn-primary">+ Add New Task</button>
                <span className={styles.verticalDots}>
                    <BsThreeDotsVertical></BsThreeDotsVertical>
                </span>
            </div>
        </div>
    )
}

export default Header