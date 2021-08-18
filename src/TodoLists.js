import React,{useState} from 'react';
import Todo from './Todo.js';
import ShowItem from './ShowItem.js';
import style from './Todo.module.css';

//start TodoLists function 
function TodoLists() {

    // this is useState
    const[texts,setText]=useState([
        {
            title:"Angular",
            completed:false
        },
        {
            title:"React",
             completed:false
        }

    ]
    
);
// end useState
//start addTitle
const addTitle=title=>{
    setText([...texts,{title}])
}
// start handleDelete
const handleDelete = id => {

    const TodoDelete=[...texts]
    TodoDelete.splice(id,1);
     setText(TodoDelete);
   
}
// start handleComplete
const handleComplete = id => {
    const TodoComplete = [...texts];
    TodoComplete[id].completed =true;
    setText(TodoComplete);
    
  };


return(
    <div>
      
       <p className={style.input}>
           {/* this is map function */}
       {
            texts.map((text,index)=><ShowItem
            key={text.id}
            id={index}
            text={text}
            handleComplete={handleComplete}
             handleDelete={handleDelete}/> )
        }
       
       </p>

       <Todo addTodo={addTitle}/>
       
      

    </div>
);
}
 
export default TodoLists;