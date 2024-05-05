// Todo.js
import React, { useState , useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import { BsSearch, BsPlus } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../Redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";



const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (

    // this is the UI of the project
    <div className="container-xl mx-auto mt-2 mt-sm-4 p-4 bg-light rounded">
      <h2 className="mt-3 mb-6 h2 fw-bold text-center text-uppercase">
        Personal TODO APP
      </h2>
      <div className="d-flex align-items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow-1 p-2 border-bottom border-gray-300 focus-outline-none focus-border-blue-500"
          type="text"
          placeholder="Add Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
         {/* button to add todo items in todo list */}
        <button
          className="ms-4 p-2 bg-primary text-white rounded hover:bg-primary-dark focus-outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>

      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-4">

        {/* this is the filter button code where we can see that which task is completed or Incomplete */}


        <FilterButtons />
        <div className="d-flex align-items-center mb-4">

          {/* this is the search bar where we can search our todo list items */}


          <input
            className="flex-grow p-2 border-bottom border-gray-300 focus-outline-none focus-border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ms-4 p-2 bg-primary text-white rounded hover:bg-primary-dark focus-outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
{/* todo list shown here */}
      <TodoList />
    </div>
  );
};

export default Todo;
