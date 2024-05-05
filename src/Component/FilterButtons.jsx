// FilterButtons.jsx

//  marks all as done and dropdown features shown here 
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../Redux/actions";

// these filter buttons helps to search the items from todo list that which task is completed 


const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="d-flex gap-4 align-items-center">
      <select
        className="small px-2 py-1 rounded border border-gray-300 focus-outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        {/* dropdown menu */}

        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
      
      {/* Mark All Completed button */}
      <button
        className="small px-2 py-1 bg-primary text-white rounded ms-2"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButtons;
