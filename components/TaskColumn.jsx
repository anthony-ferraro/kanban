import React from 'react'
import styles from '../styles/TaskColumn.module.css';
import Task from './Task';
const TaskColumn = ({ column }) => {
    return (
        <div className={styles.taskColumn}>
            <p className={styles.columnName}>{column.name}</p>
            <ul className={styles.tasksList}>
                {column.tasks.map((task, index) =>
                    <>
                        <Task task={task} key={index}></Task>
                    </>
                )}
            </ul>
        </div>
    )
}

export default TaskColumn