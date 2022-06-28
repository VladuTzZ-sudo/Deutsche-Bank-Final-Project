import React from 'react'
import { useState, useEffect } from "react";


type Props = {
    closedDate:Date,
    duration:number
}


export default function QuizLiveTimer(props: Props) {
    const  [difference, setDifference] = useState<String>("");
  

    useEffect(()=> {
        let currentDate:Date =  new Date();
    

        setTimeout(() => {
            
            let localDiff = props.closedDate.getTime()-currentDate.getTime();

            var hours = Math.floor((localDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((localDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((localDiff % (1000 * 60)) / 1000);

            setDifference(
            "Hours: "+hours 
            + " Minutes:"+ minutes 
            + " Seconds:"+seconds);
        }, 1000); // on second
    }, [difference]);


    return (
    <div>
        <h1>{difference}</h1>
    </div>);
}