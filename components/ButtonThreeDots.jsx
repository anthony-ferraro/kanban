import React from 'react'
import styles from '../styles/ButtonThreeDots.module.css';
import { BsThreeDotsVertical } from 'react-icons/bs';
const ButtonThreeDots = ({onClick}) => {
    return (
        <span onClick={onClick} className={styles.verticalDots}>
            <BsThreeDotsVertical></BsThreeDotsVertical>
        </span>
    )
}

export default ButtonThreeDots