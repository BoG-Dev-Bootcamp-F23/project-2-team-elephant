import styles from "../styles/AnimalHeader.module.css";
import React from "react";

export default function AnimalHeader() {
    return (
        <div className={styles.container}>
            <p>Animals</p>
            <div className={styles.create}>
                <img src="addicon.png" className={styles.icon} />
                <p>Create Animal</p>
            </div>
        </div>
    );
}