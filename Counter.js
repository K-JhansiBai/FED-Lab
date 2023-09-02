import React,{Component} from 'react';
class Counter extends Component
{
    state={
        count:0
    };
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    }
    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
    }
    render()
    {
        return(
        <div>
            <center>
            <button type="button" onClick={this.incrementHandler}>+</button>
            &nbsp;&nbsp;
            {this.state.count}
            &nbsp;&nbsp;
            <button type="button" onClick={this.decrementHandler}>-</button>
            </center>
        </div>
        );
    }
}
export default Counter;