import React from 'react'

export const CountButton = () =>{
const currentCount=90;
const count=0;

    // const handleClick = () =>{
    //     alert(" hai this button click")
    // }
    const updatedState =() =>{
        currentCount++;
        console.log(currentCount)
    }
    return (
        <>
        {/* <button onClick={handleClick}>
            COUNT BUTTON
        </button>
        <button onClick={() =>{
            alert("hello World")
        }}>
            Increment
        </button>
        <h1>
            {currentCount}
        </h1> */}
        <button>
            Sravs
        </button>
        </>
        
    )
}

