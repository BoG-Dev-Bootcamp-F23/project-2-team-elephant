import { useState, useEffect } from 'react';
import styles from "../styles/Testing.module.css";
import Sidebar from "@/components/Sidebar";
import UserCard from '@/components/UserCard';
import Header from '@/components/Header';
import UsersDisplay from '@/components/UsersDisplay';
import TrainingLogDisplay from '@/components/TrainingLogDisplay';
import AnimalsDisplay from '@/components/AnimalsDisplay';
import Link from 'next/link';
<<<<<<< Updated upstream
import AnimalCard from '@/components/AnimalCard';
import TrainingLogCard from '@/components/TrainingLogCard';
import UserAnimals from '@/components/UserAnimals';
import UserTrainingLogs from '@/components/UserTrainingLogs';
import { useAuth } from '@/contexts/useAuth';
=======
import CreateAnimalCard from '@/components/CreateAnimalCard';

>>>>>>> Stashed changes

export default function side() {
    const { admin, fullName } = useAuth();
    return (
        <div className={styles.container}>
            {/* <Sidebar></Sidebar> */}
            {/* <UserCard></UserCard>
            <UserCard></UserCard>
            <UserCard></UserCard> */}
            {/* <Header></Header> */}
<<<<<<< Updated upstream
            {/* <AnimalCard></AnimalCard> */}
            {/* <TrainingLogCard></TrainingLogCard> */}
            {/* <UserCard admin = {admin} fullName = {fullName}></UserCard> */}
            {/* <UsersDisplay></UsersDisplay> */}
            {/* <TrainingLogDisplay></TrainingLogDisplay> */}
            {/* <AnimalsDisplay></AnimalsDisplay> */}
            {/* <UserAnimals></UserAnimals> */}
            <UserTrainingLogs></UserTrainingLogs>
=======
            <CreateAnimalCard/>
            
>>>>>>> Stashed changes
        </div>
    );
}