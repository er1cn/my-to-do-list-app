import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
          if(item.id === todo.id) {
              return {
                  ...item, completed : !item.completed,
              };  
          } 
          return item;
        })
      );
    }


    return (
        <div className="todo">
          <li className={`todo-item ${todo.completed ? "completed" : "incomplete"}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
            <i className="fa fa-check-circle"></i> 
            </button>
            <button onClick={deleteHandler} className="delete-btn">
                <i className="fa fa-trash"></i>
            </button>
            
        </div>
    );
}
export default Todo;