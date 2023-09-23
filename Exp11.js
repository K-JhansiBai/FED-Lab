import React,{useState,useEffect} from "react";
function Exp11(){
    const [mytime,setTime]=useState("");
    const tick=()=>{
        let time=new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds;
        if(new Date.getHours()<12){
            time=time+"AM"
        }
        else{
            time=time+"PM"
            setTime(time);
        }
    }
    useEffeect(()=>{
        const t=setInterval(tick,1000);
        return()=>{
            clearTimeout(t);
        }
    },[mytime])
    return(
        <center>
            <div>
                <h1>Digital Clock</h1>
                <h1>{mytime}</h1>
            </div>
        </center>
    );
}
export default Exp11;