import UserCard from '@/components/UserCard';
import Header from '@/components/Header';
import styles from '@/styles/UsersDisplay.module.css';
import UserHeader from './UserHeader';
import { useState, useEffect } from 'react';

export default function UsersDisplay() {
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
            <UserHeader />
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