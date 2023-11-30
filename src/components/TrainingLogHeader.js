import styles from "../styles/TrainingLogHeader.module.css";
import React from "react";

export default function TrainingLogHeader(props) {
    return (
        <div className={styles.container}>
            <p>Training logs</p>
            <div className={styles.create}>
                <img src="addicon.png" className={styles.icon} onClick={props.click}/>
                <p>Create new</p>
            </div>
        </div>
    );
}