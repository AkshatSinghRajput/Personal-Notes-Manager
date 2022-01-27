import React, { useState } from "react";
export default function Field(props) {
  let [mainText, setText] = useState("");
  let textHandler = (event) => {
    setText(event.target.value);
  };
  let buttonHandler = (event) => {
    let a = mainText.toUpperCase();
    setText(a);
    props.showAlert("Converted to UpperCase", "primary");
  };
  let upgradeTextHandler = () => {
    let a = mainText.split(" ").reverse();
    setText(a.join(" "));
    props.showAlert("Text Upgraded Successfully", "danger");
  };
  let buttonloHandler = () => {
    let a = mainText.toLowerCase();
    setText(a);
    props.showAlert("Converted to LowerCase", "warning");
  };
  return (
    <div
      className="container my-5"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <center>
        <h1 className="card-title">{props.text}</h1>
      </center>
      <textarea
        id="tA"
        className="container-fluid"
        rows="8"
        onChange={textHandler}
        value={mainText}
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "black" : "white",
        }}
      />
      <div className="container my-3">
        <button
          onClick={buttonHandler}
          className="btn btn-primary mx-2 my-1"
          disabled={
            mainText.split(" ").filter((element) => {
              return element.length !== 0;
            }).length > 0
              ? 0
              : 1
          }
        >
          Press me Here to UpperCase
        </button>
        <button
          onClick={buttonloHandler}
          className="btn btn-primary mx-2 my-1"
          disabled={
            mainText.split(" ").filter((element) => {
              return element.length !== 0;
            }).length > 0
              ? 0
              : 1
          }
        >
          Press me Here to LowerCase
        </button>
        <button
          onClick={upgradeTextHandler}
          className="btn btn-primary mx-2 my-1"
          disabled={
            mainText.split(" ").filter((element) => {
              return element.length !== 0;
            }).length > 0
              ? 0
              : 1
          }
        >
          Press me Here to Upgrade Text
        </button>
      </div>
      <h3>
        Total words :{" "}
        {
          mainText.split(" ").filter((element) => {
            return element.length !== 0;
          }).length
        }
      </h3>
      <h3>
        Total reading Time:{" "}
        {0.008 *
          mainText.split(" ").filter((element) => {
            return element.length !== 0;
          }).length}
      </h3>
    </div>
  );
}
