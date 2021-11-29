//Mouting is the process of creating an elements and inserting it in a DOm tree
//there are three types 1.Constructor(),static getDerivedStateFromProps(),3.render(),4.componentDidMount()


import React from 'react'

class MoutingMethod extends React.Component{
    constructor(props){
        super(props);
        this.state={title:'sravs',id:'45'};
     this.handleClick=this.handleClick.bind(this) 
    }

handleClick() {
    this.setState({title:'haii'})
}
    render(){
        return(
            <>
            <p>
                {this.state.id}
            </p>
            <h1>
             
              {this.state.title}
              </h1>
            <button onClick={this.handleClick}>OnChange</button>
         </>
        )
    }
}
export default  MoutingMethod;