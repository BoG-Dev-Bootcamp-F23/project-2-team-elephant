import AnimalCard from './AnimalCard';
import AnimalHeader from './AnimalHeader';
import { useAuth } from '@/contexts/useAuth';
import styles from '@/styles/AnimalsDisplay.module.css';
import { useState, useEffect } from 'react';

export default function UserAnimals(props) {
    const [ userAnimals, setUserAnimals ] = useState([]);
    const { userID } = useAuth();

    useEffect(() => {
        async function getUserAnimals() {
            const response = await fetch("http://localhost:3000/api/admin/animals");
            const data = await response.json();
            setUserAnimals(data);
        }
        getUserAnimals();
    }, [])

    return (
        <div className={styles.allAnimalsContainer}>
            <AnimalHeader click={props.changeCreateAnimal} />
            <div className={styles.animalContainer}>
                {userAnimals?.map((data) => {
                    return data.owner === userID ? (
                        <AnimalCard name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained}/>
                    ) : null;
                })}
            </div>
        </div> 
    )

}