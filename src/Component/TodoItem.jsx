
// This code is basically shows that the buttons to mark and unmark the items and also to delete the todo items 

import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from "../Redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="d-flex flex-column flex-sm-row sm-align-items-center justify-content-between border-bottom border-2 py-2 gap-4">
      <div className="d-flex align-items-center">
        <span className="me-4 text-gray-500">{index + 1}.</span>
        <span
          className={`me-4 ${
            todo.completed ? "text-decoration-line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="ms-8">
        <button
          className=" m-2 mr-2 text-sm bg-primary text-white px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="m-2 mr-2 text-sm bg-danger text-white px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className="m-2 text-sm bg-success text-white px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className="m-2 text-sm bg-warning text-white px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
