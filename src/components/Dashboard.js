import UserTrainingLogs from './UserTrainingLogs';
import UserAnimals from './UserAnimals';

export default function Dashboard(props) {
    return (
        <div>
            {(props.visible === "training-logs") ? <UserTrainingLogs /> : <UserAnimals />}
        </div>
    );
}