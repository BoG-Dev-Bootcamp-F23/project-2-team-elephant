import React from "react";
import styles from '..//styles/TrainingLogCard.module.css'
import { useState, useEffect } from "react";
import { Mongoose, mongo } from "mongoose";
import connectDB from "../../server/mongodb";
import User from "../../server/mongodb/models/User";
import { userAgent } from "next/server";
import { Heebo } from 'next/font/google'
import { useAuth } from "@/contexts/useAuth";



export default function TrainingLogCard(props) {

    const {title, date, description, hours, user, animal} = props;
    const { fullName } = useAuth();

    var year;
    var month;
    var day;

    // async function getUser() {
    //     await connectDB();
    //     const userData = await User?.findById(user);
    //     console.log(userData);
    //     const name = userData.fullName;
    //     console.log(name);
    //     setUser(name);
    //     console.log(realUser);
    // }

    // useEffect(() => {
    //     getUser();
    // },[]);

    
    


    function formatDateString(originalDate) {
        const dateObject = new Date(originalDate);
        
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
      
        year = dateObject.getUTCFullYear();
        month = monthNames[dateObject.getUTCMonth()];
        day = dateObject.getUTCDate();
      
        return `${month} ${day}, ${year}`;
    }
      
    const formattedDate = formatDateString(date);
      



    return (
        <div className = {styles.mainCard}>
            <div className= {styles.date}>
                <h1> {day} </h1>
                <p> {month + " " + year}</p>
            </div>
            <div className={styles.cardContent}>
                <div className = {styles.trainingInfo}>
                    <div className = {styles.cardTitle}>
                        <h1> {title} </h1>
                        <p className={styles.hours}> • {hours} hours </p>
                    </div>
                    <div className = {styles.dogInfo}>
                        {fullName} • {animal} • Lucy
                    </div>
                    <div className = {styles.trainingDescription}>
                        {description}
                    </div>
                </div>
                <div className = {styles.editButton}>
                    <p className= {styles.letter}> Edit</p>
                </div>
            </div>
        </div>
    );

    // return (
    //     <div className = {styles.mainCard}>
    //         <div className= {styles.date}>
    //             <h1> 20 </h1>
    //             <p> Dec - 2023</p>
    //         </div>
    //         <div className = {styles.trainingInfo}>
    //             <div className = {styles.cardTitle}>
    //                 <h1> Teaching Dog to Sit </h1>
    //                 <p className={styles.hours}> • 20 hours </p>
    //             </div>
    //             <div className = {styles.dogInfo}>
    //                 Nik Vijay • Bulldog • Lucy
    //             </div>
    //             <div className = {styles.trainingDescription}>
    //                 Lucy can sit perfectly well now
    //             </div>
    //         </div>
    //         <div className = {styles.editButton}>
    //             <img src="Vector.png" className={styles.editVector} alt="editImage"/>
    //         </div>
    //     </div>
    // );
}