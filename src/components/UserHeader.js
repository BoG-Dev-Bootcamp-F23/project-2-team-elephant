import styles from "../styles/UserHeader.module.css";
import React from "react";

export default function UserHeader(props) {
    return (
        <div className={styles.container}>
            <p>All Users</p>
        </div>
    );
}