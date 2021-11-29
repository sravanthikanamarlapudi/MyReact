import React from 'react'

class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"submit!"
        }
    }
    
    render(){
        return(
            <button>
           
                {this.state.title}
                </button>
        )
    }
}

export default StateComponent;