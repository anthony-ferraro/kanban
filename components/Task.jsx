import React from 'react'
import { useState } from 'react';
import styles from '../styles/Task.module.css';
import ModalTaskDetails from './ModalTaskDetails';
const Task = ({ task }) => {
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    return (
        <>
            <li className={styles.task} onClick={() => setDetailsModalOpen(true)}>
                <p className={styles.title}>{task.title}</p>
                <p className={styles.completed}>{`${task.subtasks.reduce((numCompleted, curr, index) => (curr.isCompleted === true ? numCompleted + 1 : numCompleted), 0)} of ${task.subtasks.length} subtasks`}</p>
            </li>
            <ModalTaskDetails task={task} open={detailsModalOpen} onClose={() => setDetailsModalOpen(false)}></ModalTaskDetails>
        </>

    )
}

export default Task