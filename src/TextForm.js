import React, { useState } from "react";
export default function TextForm(props) {
  const HandleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const HandleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };
  const HandleClearClick = () => {
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Cleared!!!", "success");
  };
  const HandleonChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

  const HandleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!!!", "success");
  };

  const HandleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!!!", "success");
  };

  const [text, setText] = useState("");

  // text="New Text";   //wrong way to change state
  // setText("New Text"); //correct Way to changw state
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#042743",
          }}
          value={text}
          onChange={HandleonChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={HandleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={HandleLowClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={HandleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={HandleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary my-3 mx-2"
          onClick={HandleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the Textbox above to preview text here"}
        </p>
      </div>
    </>
  );
}
