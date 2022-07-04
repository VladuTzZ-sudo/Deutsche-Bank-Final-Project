import React from "react";
import { useState, useEffect } from "react";
import { start } from "repl";

type Props = {
  closedDate: Date;
  duration: number;
  submitFunction: any;
  starter: any;
};

export default function QuizLiveTimer(props: Props) {
  const [difference, setDifference] = useState<String>("");
  const [startTime, setStartTime] = useState<string>("");
  useEffect(() => {
    setStartTime(new Date().toString());
  }, []);
  useEffect(() => {
    let currentDate: Date = new Date();
    let localDiff = 0;

    setTimeout(() => {
      let durationMillis = props.duration * 60000;

      if (props.starter + durationMillis > props.closedDate.getTime()) {
        localDiff = props.closedDate.getTime() - currentDate.getTime();
      } else {
        localDiff = props.starter + durationMillis - currentDate.getTime();
      }

      if (localDiff > 0) {
        var hours = Math.floor(
          (localDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((localDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((localDiff % (1000 * 60)) / 1000);
        console.log(hours + ":" + minutes + ":" + seconds);
        setDifference(hours + ":" + minutes + ":" + seconds);
      } else if (localDiff <= 0) {
        console.log("DONE");
        props.submitFunction();
      }
    }, 1000); // on second
  }, [startTime, difference, props.starter]);

  return (
    <div>
      {/* <h1>{startTime}</h1> */}
      <h1>Time:{difference}</h1>
      {/* <h1>{props.closedDate.toDateString()}</h1> */}
    </div>
  );
}
