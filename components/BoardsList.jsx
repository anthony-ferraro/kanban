import React, { useEffect } from 'react'
import styles from '../styles/BoardsList.module.css';
const BoardsList = ({ data, activeBoard, setActiveBoard }) => {
    if (data!==undefined && data.boards !== undefined) {
        const boards = data.boards.map(board => board.name)
        return (
            // <>{JSON.stringify(data)}</>
            <div className={styles.boardsList} >
                <p className="c-medium-grey heading-M">ALL BOARDS ({boards.length})</p>
                <ul role="list" >
                    {boards.map((board, index) =>
                        <>
                            <li key={index} onClick={() => setActiveBoard(index)}className={`${styles.board} ${activeBoard===index ? styles.active : ""}`}>
                                <p key={index}>{board}</p>
                            </li>
                        </>
                    )}
                </ul>
            </div>

        )
    } else {
        return (
            <></>
        )
    }

}

export default BoardsList