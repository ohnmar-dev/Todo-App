
 import React,{useState} from 'react' ;
 import style from './Todo.module.css';
 function Todo({ addTodo }) {
  const [value, setValue] = useState("");
  
// handleSubmit function
  const handleSubmit =( e )=> {
    e.preventDefault();
    addTodo(value)
  };

  
  return (
    // start form
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="enter text"
        onChange={e => setValue(e.target.value)}
      />
    </form>
    // end form
  );
}
export default Todo


