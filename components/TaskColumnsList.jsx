import React from 'react'
import styles from '../styles/TaskColumnsList.module.css';
import TaskColumn from './TaskColumn';
const TaskColumnsList = ({ data, activeBoard }) => {
    if (data !== undefined) {
        return (
            <div className={styles.taskColumnsList}>
                {data.boards[activeBoard].columns.map((column, index) => <TaskColumn key={index} column={column}></TaskColumn>)}
                <div className={styles.newTaskColumnPanel}>
                    <p>+ New Column</p>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default TaskColumnsList