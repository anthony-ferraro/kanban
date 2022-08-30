import React from 'react'
import styles from '../styles/Task.module.css';
const Task = ({ task }) => {
    return (
        <li className={styles.task}>
            <p className={styles.title}>{task.title}</p>
            <p className={styles.completed}>{`${task.subtasks.reduce((numCompleted, curr, index) => (curr.isCompleted===true ? numCompleted+1 : numCompleted), 0)} of ${task.subtasks.length} subtasks`}</p>
        </li>
    )
}

export default Task