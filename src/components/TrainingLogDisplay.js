import TrainingLogCard from './TrainingLogCard';
import TrainingLogHeader from './TrainingLogHeader';
import styles from '@/styles/TrainingLogDisplay.module.css';
import { useState, useEffect } from 'react';

export default function TrainingLogDisplay(props) {
    const [ allLogs, setAllLogs ] = useState([]);
    console.log(props.setVisible)

    useEffect(() => {
        async function getLogs() {
            const response = await fetch("http://localhost:3000/api/admin/training");
            const data = await response.json();
            setAllLogs(data);
        }
        getLogs();
    }, [])

    const sortedAllLogs = [...allLogs].sort((a, b) => a.date.localeCompare(b.date));

    return (
        <div className={styles.allLogsContainer}>
            <TrainingLogHeader click = {changeCreateTraining} />
            <div className={styles.logContainer}>
                {allLogs?.map((data) => {
                    return (
                        <TrainingLogCard click = {changeEditTraining} all={true} setTrainingCardInfo = {props.setTrainingCardInfo} setVisible = {props.setVisible} id = {data._id} title={data.title} date={data.date} description={data.description} hours={data.hours} user={data.user} animal={data.animal}/>
                    )
                })}
            </div>
        </div> 
    )

}