import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fetching from './Components/Fetching';
import Title from './Components/Title';


function App() {
  return (
    <div className="App main">
      <header>
        <Title />
      </header>
      <main>
        <Fetching />
      </main>
      
      
    
    </div>
  );
}

export default App;
