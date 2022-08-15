import React from "react";

function ButtonDelete({ id, onDelete }) {
  return (
    <button onClick={() => onDelete(id)} className="delete">
      Delete
    </button>
  );
}

export default ButtonDelete;
