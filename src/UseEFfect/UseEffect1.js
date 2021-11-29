import React from 'react';
const Effect = () =>{
    const[name,setName]=React.useState("React")
    React.useEffect(()=>console.log("hai"),[name])
    const handleClick= (name) =>{
        name=== "React" ? setName("JS"): setName("React")
    }
    return (<>
    <p>
{name}
    </p>
    <button onClick= {()=>{handleClick(name)}}>
        Click me
    </button>
    </>)
}
export default Effect;