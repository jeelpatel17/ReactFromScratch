export default function Button(props) {
  return (
    <button onClick={props.action} className="btn m-2 btn-outline-primary">
      {props.text}
    </button>
  );
}
