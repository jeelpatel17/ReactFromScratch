export default function Alert(props) {
  function capitalize() {
    let updatedType = props.alert.type.charAt(0).toUpperCase();
    return updatedType + props.alert.type.slice(1);
  }
  return (
    props.alert && (
      <div
        id="alert"
        className={`alert alert-${props.alert.type}`}
        role="alert"
      >
        <strong>{capitalize()}</strong>! {props.alert.message}
      </div>
    )
  );
}
