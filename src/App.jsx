
import React from "react"; 
import "./css/inc.css"; 
import { useSelector,useDispatch } from "react-redux";   
import { Decrement, Increment } from "./Action";
const App =()=>{
    const numState = useSelector((state)=>{return state.changeNumber});
    const dispatch = useDispatch();
    return(
        <>
        <div className="main">

            <h1 className="text-center">Increment / Decrement Counter </h1>
            <h2 className="text-center">using React and Redux</h2>
            <div className="box  ">
               <button 
                
               onClick={()=>dispatch(Decrement(2))}> - </button>
               <input readOnly type="text"
                value={numState} 
                /> 
               <button 
               onClick={()=>dispatch(Increment(10))}
               > + </button>
            </div>
        </div>
        </>
    );
}
export default App;








// import React, { useState } from "react";
// import List from "./List";
// const App=()=>{
//     const [task,setTask]=useState("");
//     const [list , setList]=useState([]);
//     const inputEvent=(event)=>{
//         // console.log(event.target.value);
//         setTask(event.target.value);
//     }   
//     const submitForm=(event)=>{
//         event.preventDefault();
//         if(task === ''){
//             alert("Enter Items");    
//         }else{
//             setList((oldItems)=>{
//                 return[...oldItems,task];
//             });
//             setTask("");
//         }
//         // alert();
//     }
//     const deleteItem=(id)=>{
//             console.log(id);
//             // alert();
//             setList((oldItems)=>{
//                return oldItems.filter((elem,index)=>{
//                     return index !== id;
//                  });
//             });
//     }
//     return(
//         <>
//             <div className="container">
//                 <div className="card">
//                     <div className="card-header">
//                         <h1>To Do List</h1>
//                     </div>
//                     <div className="card-form">
//                         <form onSubmit={submitForm}>
//                         <input type="text"
//                         value={task}
//                             placeholder="Add Item"
//                             onChange={inputEvent}
//                         />
//                         <button type="submit" className="addBtn"> + </button>
//                         </form>
//                     </div>
//                     <div className="card-list">
//                         <ul>
                                
//                                 {list.map((element,index)=> 
//                                      <List taskName={element}
//                                          key={index}
//                                          id={index}
//                                          click={deleteItem}
//                                      />
//                                  )}
//                             <li>

//                                 {/* <span></span>  {list} */}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default App;
