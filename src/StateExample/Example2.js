import React from "react";
const ObjectState = () => {
  const [state, setState] = React.useState({
    name: "",
    id: undefined,
    age: undefined,
  });

  const handleClick = () => {
    setState({ id: "2", name: "sravs", age: 24 });
  };
  return (
    <>
      <h1 style={{ justifyContent: "center", fontStyle: "italic" }}>
        name :{state.name} id:{state.id} age:{state.age}
      </h1>
      <button style={{color:'black',backgroundColor:'skyblue'}} onClick={handleClick}>changeState</button>
    </>
  );
};

export default ObjectState;
