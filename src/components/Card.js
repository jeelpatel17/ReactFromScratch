import "../style.css";

export default function Card(props) {
  let imgUrl = () => {
    let url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
    let id = props.id.toString().padStart(3, "0") + ".png";
    return url + id;
  };
  return (
    <div className="card text-center m-2" style={{ width: "18 rem" }}>
      <img src={imgUrl()} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="text-muted">{props.type}</p>
        <p className="card-text">{props.xp} XP</p>
      </div>
    </div>
  );
}
