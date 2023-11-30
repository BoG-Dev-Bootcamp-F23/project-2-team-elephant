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
import { useAuth } from '@/contexts/useAuth';

export default function side() {
    const { admin, fullName } = useAuth();
    return (
        <div className={styles.container}>
            <Dashboard></Dashboard>
        </div>
    );
}