import React from 'react'

const Home = ({onStart}) => {
  return (
    <div style = {{ textAlign :"center" ,marginTop : "100px"
    }}>
            <h1> Interview Practice</h1>
            <p> Test your skills with MCQ based Interview</p>
            <br/><br/>
            <p>Select Your language</p>

       <button onClick = {()=> onStart("react")} 
             style = {{ padding : "10px 20px" ,fontSize :"16px"    
              }}>
                react</button>
             <br/><br/>
     <button onClick = {()=> onStart("c")} 
             style = {{ padding : "10px 20px" ,fontSize :"16px"    
              }}>
                C</button>
              <br/><br/>
     <button onClick = {()=> onStart("javascript")} 
             style = {{ padding : "10px 20px" ,fontSize :"16px"    
              }}>
                JavaScript</button>
              <br/><br/>
     <button onClick = {()=> onStart("python")} 
             style = {{ padding : "10px 20px" ,fontSize :"16px"    
              }}>
                Python</button>
         
                
     </div>
  )
}

export default Home