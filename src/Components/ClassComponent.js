import React from "react"

 class MyFirstClass extends React.Component{
     constructor(props){
     super(props)
     this.state={title:"hello React",ishowing:false};
     this.handleClick =this.handleClick.bind(this)     
    }

    handleclick () {
        this.setState({isShowing:!this.state.ishowing})
    }//UsedFunction can bind thate state
    render(){
        return( <div>
          <h1>  MY FIRST CLASS</h1>
          <h1>{this.state.title}</h1>
          <button onclick={this.handleClick}>
              Toogle Image
          </button>
          {this.state.ishowing?(
      <img src="https://images.unsplash.com/photo-1537897167687-34663468446b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMTM3NjEwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80" style={{marginLeft:"600px"}}/>):null}
    </div>
        )
    }
}
export default MyFirstClass;