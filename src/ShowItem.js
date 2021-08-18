import React,{Component} from 'react';
import style from './Todo.module.css';
// start ShowItem function
function ShowItem ({text,id,handleDelete,handleComplete}) {
    
    
        return ( 
            <div className={style.container}>
               <span style={{ textDecoration: text.completed ? "line-through" : "" }}> {text.title}</span>
               {/* this button click */}
               <button onClick={() => handleComplete(id)} className={style.button}>Complete</button>
               <button onClick={() => handleDelete(id)}  className={style.button}>X</button>
               {/* button click */}

            </div>
         );
  
}
// end ShowItem function
 
export default ShowItem;
