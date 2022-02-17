import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  let inspect = (e) => {
    updateSummary(e.target.value.replace(/\s+/g, " ").trim());
    changeData(e.target.value);
  };
  let toUpper = (e) => {
    changeData(data.replace(/\s+/g, " ").trim().toUpperCase());
    showAlert("success", "Converted into Upper Case!");
  };
  let toLower = (e) => {
    changeData(data.replace(/\s+/g, " ").trim().toLowerCase());
    showAlert("success", "converted into lower case!");
  };
  let toKebab = (e) => {
    changeData(data.split(" ").join("-"));
    showAlert("success", "Converted into Kebab Case!");
  };
  let toSnake = (e) => {
    changeData(data.split(" ").join("_"));
    showAlert("success", "Converted into Snake Case!");
  };
  let toCamel = (e) => {
    changeData(
      data
        .split(" ")
        .map((e, i) => {
          if (i == 0) {
            return e;
          }
          return e.charAt(0).toUpperCase() + e.slice(1, Infinity);
        })
        .join("")
    );
    showAlert("success", "Converted into Camel Case!");
  };
  let toPascal = (e) => {
    changeData(
      data
        .split(" ")
        .map((e, i) => {
          return e.charAt(0).toUpperCase() + e.slice(1, Infinity);
        })
        .join("")
    );
    showAlert("success", "Converted into Pascal Case!");
  };
  let copy = (e) => {
    navigator.clipboard.writeText(data);
    showAlert("success", "Text has been copied!");
  };
  let clear = (e) => {
    changeData("");
    updateSummary("");
    showAlert("danger", "Text has been cleared!");
  };
  let [mode, setMode] = useState("light");
  let [data, changeData] = useState();
  let [alert, setAlert] = useState(null);
  let showAlert = (type, msg) => {
    setAlert({
      type: type,
      message: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  let [summary, updateSummary] = useState("");
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <div className="container d-flex row mx-auto mt-3">
        <TextArea data={data} update={inspect} mode={mode} />
        <div className="d-flex justify-content-center">
          <Button action={toUpper} text="UPPER CASE" />
          <Button action={toLower} text="lower case" />
          <Button action={toKebab} text="Kebab-Case" />
          <Button action={toCamel} text="camelCase" />
          <Button action={toPascal} text="PascalCase" />
          <Button action={toSnake} text="Snake_Case" />
          <Button action={copy} text="Copy Text" />
          <Button action={clear} text="Clear" />
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        <h2>Your Text Summary:</h2>
        <p>
          Total: {summary.length ? summary.split(" ").length : "0"} Words,{" "}
          {summary.split("").length} Characters
        </p>
      </div>
    </>
  );
}

export default App;
