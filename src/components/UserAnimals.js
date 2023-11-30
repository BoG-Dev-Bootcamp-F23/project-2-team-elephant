import AnimalCard from './AnimalCard';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/useAuth';
import styles from '@/styles/AnimalsDisplay.module.css';
import { useState, useEffect } from 'react';

export default function UserAnimals() {
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
            <div className={styles.animalContainer}>
                {/* {userAnimals?.forEach(data => {
                    if (data.owner === userId) {
                        <AnimalCard name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained} profilePicture={data.profilePicture}/>
                    }
                   
                })}; */}

                {/* {userAnimals?.filter((animal) => (animal.owner === userID))}
                {console.log(userID)};
                {userAnimals?.forEach((element) => console.log(element.owner))} */}
                {/* {userAnimals?.map((data) => {
                    {data.owner === userID ? {return <AnimalCard key={data._id} name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained} profilePicture={data.profilePicture}/> }}
                    // return (
                    //     {data.owner === userID ?  }
                    //     <AnimalCard key={data._id} name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained} profilePicture={data.profilePicture}/>
                    // )
                })} */}

                {userAnimals?.map((data) => {
                    return data.owner === userID ? (
                        <AnimalCard key={data._id} name={data.name} breed={data.breed} owner={data.owner} hoursTrained={data.hoursTrained} profilePicture={data.profilePicture}/>
                    ) : null;
                })}

            </div>
        </div> 
    )

}