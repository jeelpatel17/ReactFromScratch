export default function TextArea(props) {
  return (
    <div className="d-flex row">
      <label htmlFor="text">
        <h1>Text Utility</h1>
      </label>
      <textarea
        id="text"
        className="p-2 rounded"
        onChange={props.update}
        value={props.data}
        style={{
          backgroundColor: props.mode == "dark" ? "#222529" : "aliceblue",
          color: props.mode == "dark" ? "aliceblue" : "#222529",
        }}
        cols="30"
        rows="7"
      ></textarea>
    </div>
  );
}
