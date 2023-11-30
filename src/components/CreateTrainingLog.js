import React from "react";
import styles from '..//styles/CreateAnimalCard.module.css';
import { useState } from "react";
import { useAuth } from "@/contexts/useAuth";
import mongoose from "mongoose";
import { StepDescription } from "@chakra-ui/react";



export default function CreateAnimalCard() {

    const mongoose = require('mongoose');

    // const { userID } = useAuth();
    const userID = "656527a8665dfcd958db8df2";

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("");
    const [hours, setHours] = useState(0);



    const titleUpdate=(event)=>{ 
        setTitle(event.target.value)
    }

    const dateUpdate=(event)=>{ 
        setDate(event.target.value)
    }

    const descriptionUpdate=(event)=>{ 
        setDescription(event.target.value)
    }

    const hoursUpdate=(event)=>{ 
        setHours(event.target.value)
    }
        
        const URL = "http://localhost:3000/api/animal"

        async function handleClick(name, breed, hoursTrained) {

        try {
            const response = await fetch(URL, 
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },  body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                        // owner: asdfa;
                        // animal: asdfasd;
                        title: title,
                        date: date,
                        description: description,
                        hours: hours
                    })

                });
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
                <input className={styles.titleInputBox} type="text" placeholder="Title" />
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
                <input  className={styles.numberInputBox} type="number" placeholder="20" />
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
                <input className = {styles.notesInputBox} type="text" placeholder="Notes" />
            </div>
            <div className={styles.buttonBar}>
                <button className={styles.cancelButton}>Cancel</button>
                <button className={styles.saveButton}>Save</button>
            </div>
        </div>
    </div>
);
    
    }