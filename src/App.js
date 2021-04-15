import './App.css';

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
                        <th>Target Body Part</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chest Fly</td>
                        <td>Chest</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;
