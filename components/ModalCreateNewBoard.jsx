import React from 'react'
import Dialog from '@mui/material/Dialog';
import styles from '../styles/ModalCreateNewBoard.module.css';
const ModalCreateNewBoard = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <div className={styles.modalCreateNewBoard}>
                <p className={styles.topHeader}>Add New Board</p>
                <p className={styles.inputHeader}>Name</p>
                <input type="text" name="" id="" />
            </div>
        </Dialog>
    )
}

export default ModalCreateNewBoard