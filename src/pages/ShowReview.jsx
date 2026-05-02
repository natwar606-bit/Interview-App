import React from 'react'

const ShowReview = ({questions, answeres, handleReset}) => {
       return(
    <div style={{
         textAlign : "center", marginTop : "50px", padding :"20px",
         overflowY: "auto", maxHeight : "70vh"

         }}>
        <h1>Review Answere</h1>
        {questions.map((e,index)=>(
            <div key = {index} style={{marginBottom :"20px"}}>
                <h3>{e.question}</h3>
                <p>your Answere : {answeres[index] || "no select answere "}</p>
                <p>correct Answere : {e.answere}</p>

            </div>
        ))} 
         <button onClick={handleReset}>Reset</button>

    </div>
  );}

    


export default ShowReview