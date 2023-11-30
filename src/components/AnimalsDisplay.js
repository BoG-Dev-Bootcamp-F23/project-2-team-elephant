import AnimalCard from './AnimalCard';
import Header from '@/components/Header';
import styles from '@/styles/AnimalsDisplay.module.css';
import { useState, useEffect } from 'react';

export default function displayAnimals() {
    const [ allAnimals, setAllAnimals ] = useState([]);

    useEffect(() => {
        async function getAnimals() {
            const response = await fetch("http://localhost:3000/api/admin/animals");
            const data = await response.json();
            setAllAnimals(data);
        }
        getAnimals();
    }, [])

    return (
        <div className={styles.allAnimalsContainer}>
            <Header/>
            <div className={styles.animalContainer}>
                {allAnimals?.map((data) => {
                    return (
                        <AnimalCard name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained} profilePicture={data.profilePicture}/>
                    )
                })}
            </div>
        </div> 
    )

}