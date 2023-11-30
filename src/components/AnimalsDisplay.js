import AnimalCard from './AnimalCard';
import AnimalHeader from './AnimalHeader';
import styles from '@/styles/AnimalsDisplay.module.css';
import { useState, useEffect } from 'react';

export default function AnimalsDisplay(props) {
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
            <AnimalHeader click = {props.changeCreateAnimal} />
            <div className={styles.animalContainer}>
                {allAnimals?.map((data) => {
                    return (
                        <AnimalCard name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained}/>
                    )
                })}
            </div>
        </div> 
    )

}