import React from 'react'
import './App.css'
const FunctionState =() =>{
    const [title ]=useState("CLick Here")
    return(
        <button>
            {title}
        </button>
    )
}

export default FunctionState;