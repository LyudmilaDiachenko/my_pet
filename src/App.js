import './App.css';
import My_pet from './components/my_pet';
import data from "../src/db.json"

function App() {
  return (
    <div className="App">
      <My_pet 
      key={`My_pet_${data.id}`}
      name={data.name}
      description={data.description}
      />
    </div>
  );
}

export default App;
