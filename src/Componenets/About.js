import React,{useState} from "react";

export function About() {

const [mystyle, setMyStyle] = useState({
  color: "black",
  backgroundColor: "white",
}); 

const [btntext, setbtntext] = useState("Enable Dark Mode")

  const Togglestyle=()=>{
    if(mystyle.color ==='white'){
       setMyStyle({
         color: "black",
         backgroundColor: "white"
       });
       setbtntext("Enable Dark Mode")
    }
    else{
      setMyStyle({
        color: "white",
        backgroundColor: "#13111b"
      });
      setbtntext("Enable Light Mode");
    }
  }

  return (
    <>
      <div className="container w-3/4 mt-20 rounded-2xl p-6" style={mystyle}>
        <h2 className="text-3xl text-cyan-500 font-semibold mb-6 ml-2">
          About US ~
        </h2>
        <p className="text-2xl mb-5">
          <b className=" text-teal-400 text-2xl">Text utilization</b> typically
          refers to the effective and efficient use of written or textual
          content for a specific purpose. It involves maximizing the value,
          clarity
        </p>
        <div className="flex justify-center items-center">
          <div className="mr-14">
            <img
              src="https://i.ytimg.com/vi/T7DQunv5veA/maxresdefault.jpg"
              className="rounded-3xl "
            />
          </div>
          <div>
            <p className="text-xl mb-2">
              <b className=" text-orange-500">Clear Text:</b> Emphasizes
              readability and understanding through concise and well-structured
              language.
            </p>
            <p className="text-xl mb-2">
              <b className=" text-orange-500">Capitalization:</b> Used for
              headings, titles, or emphasis. Capitalized text can draw attention
              and signify importance.
            </p>
            <p className="text-xl mb-2">
              <b className=" text-orange-500">Uppercase/Lowercase:</b> Employed
              for stylistic choices or to convey different tones. Uppercase
              might indicate shouting or urgency, while lowercase can imply
              informality.
            </p>
            <p className="text-xl mb-2">
              <b className=" text-orange-500">Bold Text:</b> Enhances emphasis.
              Bolded words or phrases stand out, helping users quickly grasp key
              points.
            </p>
            <p className="text-xl mb-2">
              <b className=" text-orange-500">Copy Text: </b> Enables users to
              duplicate text for sharing or reference. Copy functionality is
              vital for user convenience.
            </p>
          </div>
        </div>
        <div className="container my-3 flex justify-center items-center">
          <button className="btn btn-primary mb-3" onClick={Togglestyle}>
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}
