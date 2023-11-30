import React from "react";
import styles from '..//styles/CreateAnimalCard.module.css';
import { useState } from "react";
import { useAuth } from "@/contexts/useAuth";
import mongoose from "mongoose";


export default function CreateAnimalCard() {

    const mongoose = require('mongoose');

    // const { userID } = useAuth();
    const userID = "656527a8665dfcd958db8df2";

    const [name, setName] = useState("");
    const [breed, setBreed] = useState("")
    const [hoursTrained, setHoursTrained] = useState(0);


    const nameUpdate=(event)=>{ 
        setName(event.target.value)
    }

    const breedUpdate=(event)=>{ 
        setBreed(event.target.value)
    }

    const hoursTrainedUpdate=(event)=>{ 
        setHoursTrained(event.target.value)
    }

        
        const URL = "http://localhost:3000/api/animal"

        async function handleClick(name, breed, hoursTrained) {

        try {

            const newUserID = new mongoose.Types.ObjectId(userID);
            const response = await fetch(URL, 
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },  body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                        name: name,
                        breed: breed,
                        owner: newUserID,
                        hoursTrained: hoursTrained
                    })

                });
        } catch (e) {
            console.log(e);
        }
    }




    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Animals</h3>
            <div className={styles.mainBody}>
                <div className={styles.animalNameInput}>
                    <h4>Animal Name</h4>
                    <input className={styles.animalNameInputBox} onChange={e => { setName(e.currentTarget.value);}} value={name} type="text" placeholder="Name" onChange={nameUpdate}/>
                </div>
                <div className={styles.breedSelect}>
                <h4> Breed </h4>
                    <input className={styles.breedSelectBox} onChange={e => { setBreed(e.currentTarget.value);}} value={breed} type="text" placeholder="Breed" onChange={breedUpdate} />
                </div>
                <div className={styles.hoursTrainedInput}>
                    <h4>Total Hours Trained</h4>
                    <input  className={styles.numberInputBox} onChange={e => { setHoursTrained(e.currentTarget.value);}} value={hoursTrained} type="number" placeholder="20" onChange={hoursTrainedUpdate} />
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
                    <button onClick = {() => {handleClick(name, breed, hoursTrained)}} type="submit" className={styles.saveButton}>Save</button>
                </div>
            </div>
        </div>
    );
    
    }