import styles from "../styles/AnimalHeader.module.css";
import React from "react";

export default function AnimalHeader(props) {
    return (
        <div className={styles.container}>
            <p>Animals</p>
            <div className={styles.create}>
                <img src="addicon.png" className={styles.icon} />
                <p>Create new</p>
            </div>
        </div>
    );
}