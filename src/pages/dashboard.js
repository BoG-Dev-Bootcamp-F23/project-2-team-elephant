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
import CreateAnimalCard from '@/components/CreateAnimalCard';

export default function Dashboard() {

    const { userID } = useAuth();
  
    const [training, setTraining] = useState(false);
    const [animalCards, setAnimalCards] = useState([]);
    const [trainingCard, setTrainingCard] = useState([]);
    const [visible, setVisible] = useState("training-logs");
    const [trainingCardID, setTrainingCardInfo] = useState("");
    const [clicked, setClicked] = useState("training-logs");

    let visibleComponent;

    const changeCreateAnimal = () => {
      setVisible("create-animal");
    }

    const changeCreateTraining = () => {
      setVisible("create-training");
    }

    const changeEditTraining = () => {
      setVisible("edit-training");
    }

    const revert = () => {
      setVisible("training-logs");
      setClicked("training-logs");
    }

    if (visible === "training-logs") {
      visibleComponent = <UserTrainingLogs changeCreateTraining={changeCreateTraining} changeEditTraining={changeEditTraining} />;
    } else if (visible === "animals") {
      visibleComponent = <UserAnimals changeCreateAnimal = {changeCreateAnimal} />;
    } else if (visible === "admin-training") {
      visibleComponent = <TrainingLogDisplay changeCreateTraining={changeCreateTraining} changeEditTraining={changeEditTraining} />
    } else if (visible === "admin-animals") {
      visibleComponent = <AnimalsDisplay  changeCreateAnimal = {changeCreateAnimal} />
    } else if (visible === "admin-users") {
      visibleComponent = <UsersDisplay />
    } else if (visible === "edit-training") {
      visibleComponent = <EditTrainingLog revert={revert} setTrainingCardInfo={setTrainingCardInfo} trainingCardID = {trainingCardID} user = {userID} />
    } else if (visible === "create-training") {
      visibleComponent = <CreateTrainingLog revert={revert} user = {userID} />
    } else if (visible === "create-animal") {
      visibleComponent = <CreateAnimalCard revert={revert} />
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
            <Sidebar clicked={clicked} setClicked={setClicked} visible={visible} setVisible={setVisible} setInfo={setTraining} className = {styles.sideBarContainer} />
            {visibleComponent}
          </div>
        </div>
        </>
      );
}      
