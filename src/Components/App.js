import React from 'react'
import Home from '../Project/Home'
import Navbar from '../Project/NavBar'


//  const App = () =>{
//     let hello=<h1>HELLO WORLD<span>HAI SPAN ELEMENT</span></h1>
//     let hello2=React.createElement('h1',"null","helloWorld",React.createElement("h2","null","hai This ReactElement"))
//     let element=React.createElement;
//     let hello3=element('h4',"null","hello thi ANother Way",element("span","null","HAI MAM"))
//     let ele=React.createElement;
//     let hello4=ele('h1',{padding:"90px"},"hai this sravs")
//     return(<>
// {hello}
//     {hello2}
//     {hello3}
//     {hello4}
//     </>)
// }

// export default App;

const App = () => {
    return(
        <div className="App">
            <Navbar/>
            <div className='content'>
            <Home/>
            </div>
        </div>
    )
}

export default App;