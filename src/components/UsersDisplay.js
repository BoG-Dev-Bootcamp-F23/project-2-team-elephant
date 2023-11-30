import UserCard from '@/components/UserCard';
import Header from '@/components/Header';
import styles from '@/styles/UsersDisplay.module.css';
import { useState, useEffect } from 'react';

export default function displayUsers() {
    const [ allUsers, setAllUsers ] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch("http://localhost:3000/api/admin/users");
            const data = await response.json();
            setAllUsers(data);
        }
        getUsers();
    }, [])

    return (
        <div className={styles.allUsersContainer}>
            <Header/>
            <div className={styles.userContainer}>
                {allUsers?.map((data) => {
                    return (
                        <UserCard admin={data.admin} fullName={data.fullName}/>
                    )
                })}
            </div>
        </div> 
    )

}