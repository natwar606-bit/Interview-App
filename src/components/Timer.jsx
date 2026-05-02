import React, { useEffect } from 'react'
import { useState , useRef } from 'react'

const Timer = ({duration ,onTimeUp,questionIndex}) => {
     const [time , setTime] = useState(duration);
    const intervalRef = useRef(null);

    useEffect(()=>{
        setTime(duration);
    },[questionIndex,duration]);

   useEffect(()=>{
    intervalRef.current= setInterval(()=>{
        setTime((prev)=> prev-1);
    },1000);
    return()=> clearInterval(intervalRef.current);
   },[questionIndex])

   useEffect(()=>{
    if(time ===0){
        clearInterval(intervalRef.current);
        onTimeUp();
    }
   },[time])
  return (
   
    <h3 style={{color : time <= 3 ? "red" : "black"}}> Time left : {time}</h3>
  )
}

export default Timer