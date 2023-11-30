import React from "react";
import styles from '..//styles/CreateAnimalCard.module.css';
import { useState, useEffect } from "react";

export default function CreateAnimalCard(props) {

    const {user} = props;
    const [title, setTitle] = useState("");
    const [animalVal, setAnimal] = useState("");
    const [date, setDate] = useState("")
    
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [day, setDay] = useState("");

    const [description, setDescription] = useState("");
    const [hours, setHours] = useState(0);

    const [ userAnimals, setUserAnimals ] = useState([]);

    useEffect(() => {
        async function getUserAnimals() {
            const response = await fetch(`http://localhost:3000/api/useranimals?owner=${user}`);
            const data = await response.json();
            setUserAnimals(data);
        }
        getUserAnimals();
    }, [])

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
        const URL = "http://localhost:3000/api/training"
        async function handleClick(animalVal, title, month, day, year, description, hours) {
        try {
            const response = await fetch(URL,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },  body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                        user: user,
                        animal: animalVal,
                        title: title,
                        date: (new Date(year, month, day)).toISOString(),
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
                <input className={styles.titleInputBox} onChange={e => { setTitle(e.currentTarget.value);}} value={title} type="text" placeholder="Title" />
            </div>
            <div className={styles.animalSelect}>
                <h4>Select Animal</h4>
                <select placeholder = "Select Animal" className={styles.animalInputBox} onChange={e => { setAnimal(e.currentTarget.value);}} value={animalVal}>
                    {userAnimals?.map((data) => {
                        return (
                            <option onChange={e => { setAnimal(e.currentTarget.value);}} value={data._id}>{data.name} - {data.breed}</option>
                            
                        )
                    })}
                </select>
            </div>
            <div className={styles.hoursTrainedInput}>
                <h4>Total Hours Trained</h4>
                <input  className={styles.numberInputBox} onChange={e => { setHours(e.currentTarget.value);}} value={hours} type="number" placeholder="20" />
            </div>
            <div className={styles.dateInput}>
                <div className={styles.monthBox}>
                    <h4>Month</h4>
                    <select onChange={e => { setMonth(e.currentTarget.value);}} value={month} type="text" placeholder="July" className={styles.monthInput}>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='0'>January</option>
                            <option  onChange={e => { setMonth(e.currentTarget.value);}} value='1'>February</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='2'>March</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='3'>April</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='4'>May</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='5'>June</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='6'>July</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='7'>August</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='8'>September</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='9'>October</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='10'>November</option>
                            <option onChange={e => { setMonth(e.currentTarget.value);}} value='11'>December</option>
                    </select>
                </div>
                <div className={styles.dateBox}>
                    <h4>Date</h4>
                    <input  onChange={e => { setDay(e.currentTarget.value);}} value={day} className={styles.dateInputBox} type="number" placeholder="20" />
                </div>
                <div className={styles.yearBox}>
                    <h4>Year</h4>
                    <input onChange={e => { setYear(e.currentTarget.value);}} value={year} className={styles.yearInput} type="number" placeholder="2023" />
                </div>
            </div>
            <div className={styles.noteInput}>
                <h4>Notes</h4>
                <input className = {styles.notesInputBox} onChange={e => { setDescription(e.currentTarget.value);}} value={description} type="text" placeholder="Notes" />
            </div>
            <div className={styles.buttonBar}>
                <button className={styles.cancelButton}>Cancel</button>
                <button onClick = {() => {handleClick(animalVal, title, month, day, year, description, hours )}} type="submit" className={styles.saveButton}>Save</button>
            </div>
        </div>
    </div>
);
    }