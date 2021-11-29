import React from "react";

const ObjectIterartor = () => {
  const [state, setState] = React.useState({
    name: "sravs",
    id: "9",
    place: "hyd",
  });

  const handleClick = () => {
    setState((pre) => {
      return { ...pre, name: (pre.name = "kavya") };
    });
  };


  return (
    <>
      <h1 style={{ justifyContent: "center", fontStyle: "italic" }}>
        name :{state.name} id:{state.id} Place:{state.place}
      </h1>
      <button onClick={handleClick}>ChangeState</button>
    </>
  );
};
export default ObjectIterartor;
