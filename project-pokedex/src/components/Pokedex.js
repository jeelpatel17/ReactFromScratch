import { Component } from "react";
import Pokecard from "./Pokecard";

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let title =
      this.props.isWinner != null ? (
        <div className="text-center">
          <h1 className={this.props.isWinner ? "winner" : "loser"}>
            {this.props.isWinner ? "Winner!" : "Loser!"}
          </h1>
          <h4 className="text-muted">Total Experience: {this.props.totalXp}</h4>
        </div>
      ) : (
        ""
      );
    return (
      <div className="container d-flex flex-column align-items-center flex-wrap">
        {title}
        <div className="d-flex justify-content-center flex-wrap">
          {this.props.pokemon.map((e) => {
            return (
              <Pokecard
                key={e.id}
                id={e.id}
                name={e.name}
                type={e.type}
                xp={e.base_experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
