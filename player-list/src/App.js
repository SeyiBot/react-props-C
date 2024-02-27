
import './App.css';
import PlayersList from './components/playerList';
import TextLinkExample  from './components/navbar';


// rendered player cards with bootstrap navbar
function App() {
  return (
    <div className="App">
      < TextLinkExample />
      <h1>Top Male Footballers</h1>
      <p>Male soccer players are prominent figures in the global sports landscape, celebrated for their skill, athleticism, and charisma. 
        They exhibit remarkable agility, precision, and strategic thinking on the field, captivating audiences worldwide with their performances. 
        Often hailed as symbols of teamwork and perseverance, male soccer players inspire fans with their dedication to the sport and their ability to overcome challenges. 
        With their talent and competitive spirit, they continually push the boundaries of what is possible in the game, leaving a lasting impact on both the sport and its followers.
      </p>
      < PlayersList />
    </div>
  );
}

export default App;
