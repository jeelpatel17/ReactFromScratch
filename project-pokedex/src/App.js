import Pokedex from "./components/Pokedex";
import Pokegame from "./components/Pokegame";
import "./style.css";

export default function App() {
  return (
    <>
      <h1 className="text-center">Pokedex!</h1>
      <Pokedex isWinner={null} />
      {/* <Pokegame /> */}
    </>
  );
}
