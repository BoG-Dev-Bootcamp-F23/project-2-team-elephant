import Header from '@/components/Header';
import { useAuth } from '@/contexts/useAuth';
import styles from '@/styles/TrainingLogDisplay.module.css';
import { useState, useEffect } from 'react';
import TrainingLogCard from './TrainingLogCard';
import TrainingLogHeader from './TrainingLogHeader';

export default function UserTrainingLogs() {
    const [ userTraining, setUserTraining ] = useState([]);
    const { userID } = useAuth();

    useEffect(() => {
        async function getUserTraining() {
            const response = await fetch("http://localhost:3000/api/admin/training");
            const data = await response.json();
            setUserTraining(data);
        }
        getUserTraining();
    }, [])

    const sortedUserTraining = [...userTraining].sort((a, b) => a.date.localeCompare(b.date));

    return (
        <div className={styles.allLogsContainer}>
            <TrainingLogHeader />
            <div className={styles.logContainer}>
                {sortedUserTraining?.map((data) => {
                    return data.user === userID ? (
                        <TrainingLogCard key={data._id} title={data.title} date={data.date} description={data.description} hours={data.hours} user={data.user} animal={data.animal}/>
                    ) : null;
                })}

            </div>
        </div> 
    );
}