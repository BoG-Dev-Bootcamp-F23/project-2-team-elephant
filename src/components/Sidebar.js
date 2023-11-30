import styles from '@/styles/Sidebar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import trainingIcon from '@/images/trainingIcon.png'
import animalIcon from '@/images/animalIcon.png'
import adminTraining from '@/images/adminTraining.png'
import adminAnimals from '@/images/adminAnimals.png'
import adminUsers from '@/images/adminUsers.png'
import logoutIcon from '@/images/logoutIcon.png'
import { useAuth } from '@/contexts/useAuth'
import { useState } from 'react';

export default function Sidebar(props) {
    const { fullName, admin } = useAuth();

    return (
        <div className={styles.sideBarContainer}>
            <div>
                <div className={styles.userContainer}>
                    <button className={(props.clicked === "training-logs") ? styles.activePanel : styles.inactivePanel} onClick={() => {props.setVisible("training-logs"); props.setClicked("training-logs")}}>
                        <Image src={trainingIcon} width={30} height={30} className={styles.icon}></Image>
                        Training logs</button>
                    <button className={(props.clicked === "animals") ? styles.activePanel : styles.inactivePanel} onClick={() => {props.setVisible("animals"); props.setClicked("animals");}}>
                        <Image src={animalIcon} width={30} height={30} className={styles.icon}></Image>
                        Animals</button>
                </div>

                {admin ? <div className={styles.adminContainer}>
                    <p className={styles.adminHeader}>Admin Access</p>
                    <button className={(props.clicked === "admin-training") ? styles.activePanel : styles.inactivePanel} onClick={() => {props.setVisible("admin-training"); props.setClicked("admin-training")}}>
                        <Image src={adminTraining} width={30} height={30} className={styles.icon}></Image>
                        All Training</button>
                    <button className={(props.clicked === "admin-animals") ? styles.activePanel : styles.inactivePanel} onClick={() => {props.setVisible("admin-animals"); props.setClicked("admin-animals")}}>
                        <Image src={adminAnimals} width={30} height={30} className={styles.icon}></Image>
                        All Animals</button>
                    <button className={(props.clicked === "admin-users") ? styles.activePanel : styles.inactivePanel} onClick={() => {props.setVisible("admin-users"); props.setClicked("admin-users")}}>
                        <Image src={adminUsers} width={30} height={30} className={styles.icon}></Image>
                        All Users</button>
                </div> : <div className={styles.noAdmin}></div>}
            </div>

            <div className={styles.userInfoContainer}>
                
                <div className={styles.userLeft}>
                    <div className={styles.userLogo}>{fullName.charAt(0).toUpperCase()}</div>

                    <div className={styles.userTopAndBottom}>
                        <div className={styles.userTop}>
                            <div className={styles.userName}>{fullName}</div>
                        </div>
                        <div className={styles.userBottom}>
                            <div className={styles.userType}>{admin ? "Admin" : "User"}</div>
                        </div>
                    </div>
                    
                    
                </div>

                <Link href='../'>
                        <Image src={logoutIcon} width={40} height={40} className={styles.icon}/>
                </Link>


            </div>



            {/* <p className="select">Select your starting station</p>
            <div className={"All Stations" === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                onClick={() => {
                    updateStation("All Stations");
                }}
            >All Stations</div>

            {stationData?.map((station) => {
                return (
                    <div className={station === activeStation ? 'navBarElementHighlight' : 'navBarElement'}
                        onClick={() => {
                            updateStation(station);
                        }}
                    >{station}</div>
                )
            })} */}



        </div>

    )
}

