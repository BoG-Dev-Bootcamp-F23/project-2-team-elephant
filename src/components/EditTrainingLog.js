import React from "react";
import styles from '..//styles/CreateTrainingLog.module.css';
import { set } from "mongoose";
import { useAuth } from "@/contexts/useAuth";
import { useState, useEffect } from "react";

export default function EditTrainingLog(props) {

    const [hoursTrained, setHoursTrained] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")




    const URL = "http://localhost:3000/api/training"
    async function handleClick(title, description, hoursTrained) {
    try {
        const response = await fetch(URL,
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },  body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                    id: props.trainingCardID,
                    title: title,
                    description: description,
                    hours: hoursTrained
                })
            });
            const data = await response.json();
            console.log(data);

    } catch (e) {
        console.log(e);
    }
}



    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Training Logs</h3>
            <div className={styles.mainBody}>
                <div className={styles.titleInput}>
                    <h4>Title</h4>
                    <input className={styles.titleInputBox} type="text" placeholder="Title" value = {title} onChange={e => {setTitle(e.currentTarget.value);}} />
                </div>
                <div className={styles.animalSelect}>
                    <h4>Select Animal</h4>
                    <select placeholder = "Select Animal" className={styles.animalInputBox}>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                    </select>
                </div>
                <div className={styles.hoursTrainedInput}>
                    <h4>Total Hours Trained</h4>
                    <input  className={styles.numberInputBox} type="number" placeholder="20"  value = {hoursTrained} onChange={e => {setHoursTrained(e.currentTarget.value);}}/>
                </div>
                <div className={styles.dateInput}>
                    <div className={styles.monthBox}>
                        <h4>Month</h4>
                        <input className={styles.monthInput} type="text" placeholder="July" />
                    </div>
                    <div className={styles.dateBox}>
                        <h4>Date</h4>
                        <input  className={styles.dateInputBox} type="number" placeholder="20" />
                    </div>
                    <div className={styles.yearBox}>
                        <h4>Year</h4>
                        <input  className={styles.yearInput} type="number" placeholder="2023" />
                    </div>
                </div>
                <div className={styles.noteInput}>
                    <h4>Notes</h4>
                    <input className = {styles.notesInputBox} type="text" placeholder="Notes" value = {description} onChange={e => {setDescription(e.currentTarget.value);}}  />
                </div>
                <div className={styles.buttonBar}>
                    <button className={styles.cancelButton}>Cancel</button>
                    <button onClick = {() => {handleClick(title, description, hoursTrained)}} className={styles.saveButton}>Save</button>
                </div>
            </div>
        </div>
    );
}
