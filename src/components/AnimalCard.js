import React from 'react'
import styles from '..//styles/AnimalCard.module.css'
import { useState, useEffect } from 'react';
import connectDB from "../../server/mongodb";
import User from "../../server/mongodb/models/User";
import { Connection } from 'mongoose';
import getOneUser from '../../server/mongodb/actions/getOneUser';
import { useAuth } from '@/contexts/useAuth';



export default function AnimalCard(props) {
    const {name, breed, owner, hoursTrained, profilePicture} = props;
    const { fullName } = useAuth();

    const [realUser, setUser] = useState("");



    return (
        <div className= {styles.animalCard}>
            <img src= {profilePicture} className={styles.animalCardPhoto} alt="dog" />
            <div className = {styles.animalCardInfo}>
                <div className={styles.circle}>
                <div className = {styles.logo}> {realUser.substring(0, 1)} </div>
                </div>
                <div className= {styles.animalCardText} > 
                    <div className = {styles.nameDog}>
                        <p> {name} - {breed} </p>
                    </div>
                    <div className = {styles.trainerHours}>
                        <p> {fullName} • Trained {hoursTrained} hours</p>
                    </div>
                </div>
            </div>
        </div>
    );




}