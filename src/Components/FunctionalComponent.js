import React from "react";

// export const FunctionComponent = (props) =>{
//     return (
//         <div> <h1 >  {props.title} </h1>     </div>
//     );
// }

export const FunctionComponent = ({ title }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick= () =>{
      setOpen(!open)
  }
 

  return (
    
    <div style={{height:"1200px"}}>
    <h1 style={{marginLeft:"860px",fontStyle:"italic"}}>
      My FIRST APPLICATION
    </h1>
      <button style={{ backgroundColor:'purple' ,color:"white",padding:"20px",marginLeft:"990px",fontStyle:"italic",marginBottom:"20px"}} onClick={handleClick}>Click my Image</button>
      {open === true? 
      <img src="https://images.unsplash.com/photo-1537897167687-34663468446b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMTM3NjEwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80" style={{marginLeft:"600px"}}/>:null}

    </div>
  );
};
