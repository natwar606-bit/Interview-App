import React, { useState  } from 'react'
import Timer from './Timer';
import {questionData} from './Questions'
import ShowReview from './ShowReview';
import ShowResult from './ShowResult';



const Interview = ({category , onReset}) => {
   const questions = questionData?.[category];
   
  const [current , setCurrent ] = useState(0);
  const [selected , setSelected] = useState(null);
  const [ score , setScore] = useState(0);
  const [resultShow , setResultShow] = useState(false);
  const [answeres , setAnsweres] = useState([]);
  const [showReview , setShowReview] = useState(false);
  
  const q = questions[current];

  const handleNext = () => {
    setAnsweres((prev)=>[...prev , selected]);
    if(selected === q.answere){
        setScore(score+1);
    }
    setSelected(null);
    if((current+1) < questions.length)
    {
        setCurrent(current +1);
    }
    else
    {
        setResultShow(true);
    }
  }


  

  const handleReset = () =>{
    setScore(0);
    setCurrent(0);
    setResultShow(false);
    setSelected(null);
    setAnsweres([]);
    setShowReview(false);
    onReset();

  }
   // SHOW REVIEW
        if(showReview){
            return <ShowReview questions={questions} answeres={answeres} 
            handleReset={handleReset}/>;
              }


  
   //SHOW RESULT
  if(resultShow){
return ( <ShowResult score={score} questions={questions} handleReset={handleReset} 
    setShowReview={setShowReview} />
);}

  return (
    <div style={{ textAlign : "center" , marginTop :"100px"}}>
      <Timer
      duration = {10}
      onTimeUp = {handleNext}
      questionIndex={current}/>
        <p>Q{current+1}/{questions.length}</p>
        <h2>{q.question}</h2>
        {q.option.map((opt,i)=>(
            <div key = {i} >
                <button  onClick={()=> {setSelected(opt)}}
                 style={{margin : "10px",
                        backgroundColor : selected === opt ? "lightblue" : "white"
                 }}>
                    {opt}
                </button>
            </div>
        ))}
           <div>
                <button onClick={handleNext} disabled = {!selected} style={{marginTop:"20px"}}
                >Next</button>
           </div>

    </div>
  )
}


export default Interview