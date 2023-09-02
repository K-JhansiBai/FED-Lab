import React,{Component} from "react";

class Exp8 extends Component{
    constructor(props){
        super(props);
        this.state={
            countries:[
                {name:'India',capital:'NewDelhi'},
                {name:'China',capital:'Beijing'},
                {name:'USA',capital:'DC'},
                {name:'Bangladesh',capital:'Dhaka'},
                {name:'Japan',capital:'Tokyo'},
            ]
        }
    }

    render(){
        const{countries}=this.state;
        return(
            <center>
            <div>
                <table border="1">
                    <tr>
                        <th>Country Name</th>
                        <th>Capital</th>
                    </tr>
                    {countries.length>0 && countries.map((county)=>{
                        return<tr key={county.name}>
                            <td>{county.name}</td>
                            <td>{county.capital}</td>
                        </tr>
                    })}
                </table>
            </div>
            </center>
        )
    }
}
export default Exp8;