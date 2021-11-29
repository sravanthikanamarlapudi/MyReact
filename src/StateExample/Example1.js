import React from "react";

const FirstState = () =>{
    const [title,setTitle]=React.useState("JS")
    const  handleclick = () => {
    setTitle("my React")}
 
 return(<>
  <h1>
      {title}
  </h1>
  <button onClick={handleclick}>
      Change Title
  </button>
    </>)
}
export default FirstState;