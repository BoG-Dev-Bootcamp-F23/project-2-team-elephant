import React from "react";
import styles from '..//styles/CreateTrainingLog.module.css';
import { set } from "mongoose";
import { useAuth } from "@/contexts/useAuth";
import { useState, useEffect } from "react";

export default function EditTrainingLog(props) {

    const { user } = props;
    var newTitle;
    var newHours;
    var newDescription;
    var newMonth;
    var newYear;
    var newDay;


    
    const [ animalVal, setAnimal ] = useState("");
    const [ userAnimals, setUserAnimals ] = useState([]);
    const [ logs, setLogs] = useState([]);
    console.log(props.trainingCardID);


    useEffect(() => {
        async function getLogs() {
            const response = await fetch(`http://localhost:3000/api/admin/training`);
            const data = await response.json();
            setLogs(data);
            
            // const filteredData = data.filter((object) => {
            //     console.log("ObjectID = " + object._id + " " + typeof object._id);

            //     console.log("props ID = " + props.trainingCardID + " " + typeof props.trainingCardID);
            //     object._id.localeCompare(props.trainingCardID);
            // });
            // console.log("filtered = " + filteredData)
            // setFilteredData(filteredData);
        }
        getLogs();
    }, [])

    for (let i = 0; i < logs?.length; i++) {
        if (logs[i]._id === props.trainingCardID) {
            newTitle = logs[i].title;
            newDescription = logs[i].description;
            newHours = logs[i].hours;
            newDay = logs[i].date.substring(8,10);
            newMonth = new Date(logs[i].date).toDateString().substring(4,7);
            newYear = logs[i].date.substring().substring(0, 4);
        }
    }


    
    useEffect(() => {
        async function getUserAnimals() {
            const response = await fetch(`http://localhost:3000/api/useranimals?owner=${user}`);
            const data = await response.json();
            setUserAnimals(data);
        }
        getUserAnimals();
    }, [])


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
                },  body: JSON.stringify({ 
                    id: props.trainingCardID,
                    title: title,
                    description: description,
                    hours: hoursTrained
                })
            });
            console.log(response);
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
                    <input className={styles.titleInputBox} type="text" placeholder={newTitle} value = {title} onChange={e => {setTitle(e.currentTarget.value);}} />
                </div>
                <div className={styles.animalSelect}>
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
                    <input  className={styles.numberInputBox} type="number" placeholder= {newHours}  value = {newHours} onChange={e => {setHoursTrained(e.currentTarget.value);}}/>
                </div>
                <div className={styles.dateInput}>
                <div className={styles.monthBox}>
                    <h4>Month</h4>
                    <input type="text" value = {newMonth} placeholder={newMonth} className={styles.monthInput}>
                    </input>
                </div>
                <div className={styles.dateBox}>
                    <h4>Date</h4>
                    <input className={styles.dateInputBox} type="number" placeholder={newDay} />
                </div>
                <div className={styles.yearBox}>
                    <h4>Year</h4>
                    <input className={styles.yearInput} type="number" placeholder={newYear} />
                </div>
            </div>
                <div className={styles.noteInput}>
                    <h4>Notes</h4>
                    <input className = {styles.notesInputBox} type="text" placeholder={newDescription} value = {description} onChange={e => {setDescription(e.currentTarget.value);}}  />
                </div>
                <div className={styles.buttonBar}>
                    <button className={styles.cancelButton}>Cancel</button>
                    <button onClick = {() => {handleClick(title, description, hoursTrained)}} className={styles.saveButton}> Save </button>
                </div>
            </div>
        </div>
    );
}
