import { useState, useEffect } from 'react';
import styles from "../styles/Testing.module.css";
import Sidebar from "@/components/Sidebar";
import UserCard from '@/components/UserCard';
import Header from '@/components/Header';
import UsersDisplay from '@/components/UsersDisplay';
import TrainingLogDisplay from '@/components/TrainingLogDisplay';
import AnimalsDisplay from '@/components/AnimalsDisplay';
import Link from 'next/link';
import AnimalCard from '@/components/AnimalCard';
import TrainingLogCard from '@/components/TrainingLogCard';
import UserAnimals from '@/components/UserAnimals';
import UserTrainingLogs from '@/components/UserTrainingLogs';
import Dashboard from './dashboard';
import CreateAnimalCard from '@/components/CreateAnimalCard';
import CreateTrainingLog from '@/components/CreateTrainingLog';
import { useAuth } from '@/contexts/useAuth';
import EditTrainingLog from '@/components/EditTrainingLog';

export default function side() {
    const { userID } = useAuth();
    return (
        <div className={styles.container}>
            <Dashboard></Dashboard>
            {/* <AnimalsDisplay></AnimalsDisplay> */}
            {/* <TrainingLogDisplay></TrainingLogDisplay> */}
        </div>
    );
}