import { GameArea } from "../components";
import { Game, Menu } from "../views";

import './styles.css'

function App() {
  return (
    <div className="App">
      <GameArea>
        <Game/>
      </GameArea>
    </div>
  );
}

export default App;
