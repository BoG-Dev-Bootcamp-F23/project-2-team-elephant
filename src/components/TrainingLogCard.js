import React from "react";
import styles from '..//styles/TrainingLogCard2.module.css'
import trainingIcon from '@/images/trainingIcon.png'
import Image from "next/image";
import { useState, useEffect } from "react";
import { Mongoose, mongo } from "mongoose";
import connectDB from "../../server/mongodb";
import User from "../../server/mongodb/models/User";
import { userAgent } from "next/server";
import { Heebo } from 'next/font/google'
import { useAuth } from "@/contexts/useAuth";



export default function TrainingLogCard(props) {
    const {all, title, date, description, hours, user, animal, setVisible} = props;

    const { fullName } = useAuth();

    const dayy = props.date.substring(8, 10);
    var monthh = props.date.substring(5, 7);
    if (monthh === "00") {
        monthh = "JAN";
    }  else if (monthh === "01") {
        monthh = "FEB";
    } else if (monthh === "02") {
        monthh = "MAR";
    } else if (monthh === "03") {
        monthh = "APR";
    } else if (monthh === "04") {
        monthh = "MAY";
    }else if (monthh === "05") {
        monthh = "JUNE";
    } else if (monthh === "06") {
        monthh = "JULY";
    } else if (monthh === "07") {
        monthh = "AUG";
    } else if (monthh === "08") {
        monthh = "SEPT";
    } else if (monthh === "09") {
        monthh = "OCT";
    } else if (monthh === "10") {
        monthh = "NOV";
    } else {
        monthh = "DEC";
    }

    const yearr = props.date.substring(0, 4);

    const monthYear = monthh + " - " + yearr;

    var year;
    var month;
    var day;

    const [ allUsers, setAllUsers ] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("http://localhost:3000/api/admin/users");
            const data = await response.json();
            setAllUsers(data);
        }
        getUsers();
    }, [])

    const [ allAnimals, setAllAnimals ] = useState([]);

    useEffect(() => {
        async function getAnimals() {
            const response = await fetch("http://localhost:3000/api/admin/animals");
            const data = await response.json();
            setAllAnimals(data);
        }
        getAnimals();
    }, [])

    var breed;
    var name;

    for (let i = 0; i < allAnimals?.length; i++) {
        //console.log(typeof allAnimals[i]._id);
        if (allAnimals[i]._id === animal) {
            breed = allAnimals[i].breed;
            name = allAnimals[i].name;
            break;
        }
    }

    var allFullName;

    for (let j = 0; j < allUsers?.length; j++) {
        if (allUsers[j]._id === user) {
            allFullName = allUsers[j].fullName;
            break;
        }
    }
    
    
    return (
        <div className = {styles.mainCard}>
            <div className = {styles.left}>
                <div className={styles.date}>
                    <div className={styles.day}>{dayy}</div>
                    <div className={styles.monthYear}>{monthYear}</div>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.leftRight}>
                    <div className={styles.description}>
                        <div className={styles.top}>
                            <div className={styles.title}>{title}</div> 
                            <div className={styles.hours}><b>•</b></div>
                            <div className={styles.hours}>{hours} hours</div>
                        </div>
                        
                        <div className={styles.middle}>
                            {all ? allFullName : fullName} - {breed} - {name}
                        </div>

                        <div className={styles.bottom}>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>

        

            </div>

            <div className={styles.farRight}>
                    <button onClick={() => {setVisible("edit-training"); props.setTrainingCardInfo(props.id)}} className={styles.editButton}>
                        <Image src={trainingIcon} width={30} height={30} className={styles.icon}></Image>
                    </button>
            </div>

        </div>
    )

}