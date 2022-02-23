import "../style.css";

export default function Pokecard(props) {
  let imgUrl = () => {
    let url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
    let id = props.id.toString().padStart(3, "0") + ".png";
    return url + id;
  };
  return (
    <div className="card text-center m-2 rounded" style={{ width: "18 rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <img src={imgUrl()} className="card-img-top w-75" alt={props.name} />
        <p className="text-muted">{props.type}</p>
        <p className="card-text">{props.xp} XP</p>
      </div>
    </div>
  );
}
