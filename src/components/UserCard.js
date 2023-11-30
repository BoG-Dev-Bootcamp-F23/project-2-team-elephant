import styles from '@/styles/UserCard.module.css'
import { useAuth } from '@/contexts/useAuth';
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";

export default function UserCard(props) {
    // const { admin, fullName } = useAuth();
    const {admin, fullName} = props;

    return (

            <div className={styles.userInfoContainer}>
                
                <div className={styles.userLeft}>
                    <div className={styles.userLogo}>{fullName?.charAt(0).toUpperCase()}</div>

                    <div className={styles.userTopAndBottom}>
                        <div className={styles.userTop}>
                            <div className={styles.userName}>{fullName}</div>
                        </div>
                        <div className={styles.userBottom}>
                            <div className={styles.userType}><b>{admin ? "Admin" : "User"}</b></div>
                            <div className={styles.userType}><b>•</b></div>
                            <div className={styles.userType}>Atlanta, Georgia</div>
                        </div>
                    </div>
                    
                    
                </div>

            </div>




    

    )
}

