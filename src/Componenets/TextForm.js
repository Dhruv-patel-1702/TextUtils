import React, { useState } from "react";
import propTypes from "prop-types";

function TextForm(props){

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to Uppercase", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value); // Update the 'text' state with the new input value
  };

  const handleloClick =()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to Lowercase","success");
  }

  const handleclearClick=()=>{
    let newtext="" 
    setText(newtext);
    props.showAlert("Text has been cleard", "success");
  }

  const handlecapiClick=()=>{
     let newtext=text.split(' ')
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    .join(' ');
    setText(newtext)
    props.showAlert("Convert to Capitalize Word", "success");
  }

 const [text, setText] = useState("Enter text here");

  return (
    <>
      <div
        className="container mt-10"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1
          className={`md:font-bold mx-16 xl:mx-28 text-2xl lg:mx-20 2xl:mx-32 `}
        >
          {props.heading}
        </h1>
        <textarea
          className="form-control w-5/6 m-auto mt-3 md:text-sm xl:text-base sm:text-sm"
          id="Mybox"
          rows="10"
          value={text}
          onChange={handleOnchange}
          onClick={handleclearClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#13111b" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <div className="container my-3 flex content-center justify-center">
        <div className="md:absolute left-42 mt-3 ">
          <button
            className="btn btn-primary my-1 md:text-sm xl:text-lg py-1 px-2 mx-1 sm:text-sm  "
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            className="btn btn-primary mx-3 md:text-sm xl:text-lg py-1 px-2  sm:text-sm"
            onClick={handleloClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary  mx md:text-sm xl:text-lg py-1 px-2 mx-1  sm:text-sm"
            onClick={handleclearClick}
          >
            Clear
          </button>
          <button
            className="btn btn-primary  mx-3 md:text-sm xl:text-lg py-1 px-2  sm:text-sm"
            onClick={handlecapiClick}
          >
            Capitalize Word
          </button>
          <div
            className="flex content-center justify-center mt-4"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <div className="md:text-sm xl:text-lg sm:text-sm">
              <h1 className={`md:text-2xl text-${props.Style} sm:text-xl`}>
                Your text summary
              </h1>
              <p className={`text-${props.Style}`}>
                {" "}
                *{" "}
                <b className={`text-${props.Style}`}>
                  {
                    text.split(" ").filter((element) => {
                      return element.length !== 0;
                    }).length
                  }
                </b>{" "}
                words and <b className={`text-${props.Style}`}>{text.length}</b>{" "}
                characters
              </p>
              <p className={`text-${props.Style}`}>
                {" "}
                <b>
                  *{" "}
                  {0.008 *
                    text.split(" ").filter((element) => {
                      return element.length !== 0;
                    }).length}
                </b>{" "}
                minutes read
              </p>
              <h2 className={`text-${props.Style} text-2px`}>Preview</h2>
              <p className={`text-${props.Style}`}>
                {text.length > 0
                  ? text
                  : "Enter something in the textbox above to preview it here"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  title: propTypes.string.isRequired,
};

export default TextForm; 
