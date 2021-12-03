import React from "react";

const List=(props)=>{
    return(
        <li ><span>
            <button onClick={()=>{
                props.click(props.id)
            }}>
                x
            </button>
        </span>
             {props.taskName}</li>   
    );
}
export default List;