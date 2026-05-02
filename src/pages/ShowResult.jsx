import React from 'react'

const ShowResult = ({score, questions, handleReset, setShowReview}) => {
    const Accuracy =  (score / questions.length * 100).toFixed(2);

    return(
<div style={{textAlign : "center", marginTop :"100px"} } >
    <h2>Interview Finised</h2>
    <p>score : {score}/{questions.length }</p>
    <p>Accuracy : {Accuracy}%</p>
    <button style={{ marginTop : "10px"}} onClick = {()=>setShowReview(true)}>Review Answere</button>
    <br /><br/>
    <button style={{ marginTop : "10px"}} onClick={handleReset}>Reset</button>
</div>
    );}



export default ShowResult