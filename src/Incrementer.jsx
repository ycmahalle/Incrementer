import React ,{ useState } from "react";

const Incrementer=()=>{
    let [number ,setNumber]=useState;
    const Increment=()=>{
        number=parseInt(number)+1;
        
        setNumber(number);
    }
    const Decrement=()=>{
        if(number > 0){
            number=parseInt(number)-1;
            setNumber(number);
        }
        else{
            alert("Limit Exceeded");
        }
       
    }
   
    return(
        <>
            <div className="container">
                <div className="card">
                   <div className="strip">
                       <h1>{number}</h1>
                   </div>
                    <div className="buttons">
                        <button onClick={Increment}>INC</button>
                        <button onClick={Decrement}>DEC</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Incrementer;