import './App.css';
import MainGame from "./component/tictactoe/MainGame";
import Reducer from "./component/Reducer/Reducer";
import Game from "./component/tictactoe2/Game";

function App() {
  return (
      <div className="bg-slate-800 h-[100vh] flex items-center justify-center">
          <Game/>
      </div>
  );
}

export default App;
