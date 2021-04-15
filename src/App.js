import './App.css';
import exercises from './exercise.json'

const listOfExercises = exercises.slice(0, 20).map(exercise => (
    <tr key={exercise.id}>
        <td>{exercise.name}</td>
        <td>{exercise.muscleGroups.join(', ')}</td>
        <td>{exercise.categories.join(', ')}</td>
    </tr>
));

function App() {
    return (
        <div
            style={
                {
                    margin: "auto",// center the content of the page
                    width: 800,
                    paddingTop: "1rem"
                }
            }>
            <h1 className="title">Exercise Search</h1>
            <table width="100%">
                <thead>
                <tr>
                    <th>Exercise</th>
                    <th>Muscle Group</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                    {listOfExercises}
                </tbody>
            </table>
        </div>
    );
}

export default App;
