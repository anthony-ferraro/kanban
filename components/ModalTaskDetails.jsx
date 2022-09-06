import React from 'react'
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import styles from '../styles/ModalTaskDetails.module.css';
import ButtonThreeDots from './ButtonThreeDots';

const ModalTaskDetails = ({ task, open, onClose }) => {
    const age = 10;
    const theme = createTheme({
        status: {
            danger: "orange",
        },
    });
    const CustomSelect = styled(Select)(({ theme }) => ({
        // 'label + &': {
        //   marginTop: theme.spacing(3),
        // },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            color: "#828FA3",
            '&:before': {
                borderColor: "#828FA3",
            },
            '&:after': {
                borderColor: "#828FA3",
            },
            //   backgroundColor: theme.palette.background.paper,
            border: '1px solid #828FA3',
            fontSize: 16,
            padding: '10px 26px 10px 12px',
            //   transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                border: "1px solid #635FC7",
                // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }));
    return (
        <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={onClose}>
                <div className={styles.modalTaskDetails}>
                    <div className={styles.top}>
                        <p className={styles.title}>{task.title}</p>
                        <ButtonThreeDots></ButtonThreeDots>
                    </div>
                    <p className={styles.description}>
                        {task.description}
                    </p>
                    <section className={styles.subtasksSection}>
                        <p className={styles.completed}>{`Subtasks (${task.subtasks.reduce((numCompleted, curr, index) => (curr.isCompleted === true ? numCompleted + 1 : numCompleted), 0)} of ${task.subtasks.length})`}</p>
                        <ul className={styles.subtasksList}>
                            {task.subtasks.map((subtask) =>
                                <li className={`${styles.subtask} ${subtask.isCompleted === true ? styles.complete : ""}`}>
                                    <Checkbox checked={subtask.isCompleted === true} style={{ color: "#635FC7", }}></Checkbox>
                                    <p>{subtask.title}</p>
                                </li>
                            )}
                        </ul>
                    </section>
                    <section className={styles.statusSection}>
                        <p>Current Status</p>
                        <FormControl sx={{ width: 1 }}>
                            {/* <InputLabel id="demo-simple-select-label">Current Status</InputLabel> */}
                            <CustomSelect
                                id="demo-simple-select"
                                value={age}
                                // label="Current Status"
                                onChange={() => { }}
                            >
                                <MenuItem value={10}>Todo</MenuItem>
                                <MenuItem value={20}>Doing</MenuItem>
                                <MenuItem value={30}>Done</MenuItem>
                            </CustomSelect>
                        </FormControl>
                    </section>

                </div>
            </Dialog>
        </ThemeProvider>
    )
}

export default ModalTaskDetails