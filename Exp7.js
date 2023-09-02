import React,{Component} from "react";
class Exp7 extends Component
{
    constructor(props){
        super(props);
        this.state={
            color:'#FF00FF',
        }
    }
    redHandler=()=>{
        this.setState({color:'red'});
    }
    greenHandler=()=>{
        this.setState({color:'green'});
    }
    blueHandler=()=>{
        this.setState({color:'blue'});
    }
    render()
    {
        return(
            <div>
                <center>
                <h1 style={{color:this.state.color}}>Welcome to ReactJS</h1>
                <button type="button" onClick={this.redHandler}>RED</button>
                &nbsp;&nbsp;
                <button type="button" onClick={this.greenHandler}>GREEN</button>
                &nbsp;&nbsp;
                <button type="button" onClick={this.blueHandler}>BLUE</button>
                &nbsp;&nbsp;
                </center>
            </div>
        );
    }
}
export default Exp7;