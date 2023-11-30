import styles from '@/styles/Dashboard.module.css'
import Login from './Login';
import AnimalCard from '@/components/AnimalCard';
import { useState, useEffect } from 'react';
import TrainingLogCard from '@/components/TrainingLogCard';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/useAuth';
import UserTrainingLogs from '@/components/UserTrainingLogs';
import UserAnimals from '@/components/UserAnimals';
import User from '../../server/mongodb/models/User';
import AnimalsDisplay from '@/components/AnimalsDisplay';
import TrainingLogDisplay from '@/components/TrainingLogDisplay';
import UsersDisplay from '@/components/UsersDisplay';
import EditTrainingLog from '@/components/EditTrainingLog';
import CreateTrainingLog from '@/components/CreateTrainingLog';
export default function Dashboard() {

    const { userID } = useAuth();
  
    const [training, setTraining] = useState(false);
    const [animalCards, setAnimalCards] = useState([]);
    const [trainingCard, setTrainingCard] = useState([]);
    const [visible, setVisible] = useState("admin-training");
    const [trainingCardID, setTrainingCardInfo] = useState("");

    let visibleComponent;

    if (visible === "training-logs") {
      visibleComponent = <UserTrainingLogs setVisible = {setVisible} setTrainingCardInfo = {setTrainingCardInfo}  />;
    } else if (visible === "animals") {
      visibleComponent = <UserAnimals />;
    } else if (visible === "admin-training") {
      visibleComponent = <TrainingLogDisplay setVisible = {setVisible} setTrainingCardInfo = {setTrainingCardInfo} />
    } else if (visible === "admin-animals") {
      visibleComponent = <AnimalsDisplay />
    } else if (visible === "admin-users") {
      visibleComponent = <UsersDisplay />
    } else if (visible === "edit-training") {
      visibleComponent = <EditTrainingLog trainingCardID = {trainingCardID} user = {userID} />
    } else if (visible === "create-training") {
      visibleComponent = <CreateTrainingLog user = {userID} />
    }

    async function getTrainingData() {
        try {
            const rawData = await fetch("http://localhost:3000/api/admin/training")
            const data = await rawData.json();
            setTrainingCard(data);
            return data;
        } catch (error) {
            console.log("error happened:" + error);
        }
    }

    async function getAnimalData() {
        try {
            const rawData = await fetch("http://localhost:3000/api/admin/animals")
            const data = await rawData.json();
            setAnimalCards(data);
            return data;
        } catch (error) {
            console.log("error happenend:" + error);
        }
    }


    useEffect(() => {
        if (training) {
            getTrainingData();
        } else {
            getAnimalData();
        }
    }, [training]);

    return (
        <>
        <div className={styles.everything}>
          {/* <div className={styles.headerContainer}> */}
            <Header className = {styles.headerContainer}/>
          {/* </div> */}
          <div className={styles.mainContent}>
            <Sidebar visible={visible} setVisible={setVisible} setInfo={setTraining} className = {styles.sideBarContainer} />
            {visibleComponent}
          </div>
        </div>
        </>
      );
}      
