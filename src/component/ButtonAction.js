import React from "react";

function ButtonAction({ id, titleAction, onArchived, onBack }) {
  if (titleAction === "Archive") {
    return (
      <button className="archive" onClick={() => onArchived(id)}>
        Archive
      </button>
    );
  }
  if (titleAction === "Unarchive") {
    return (
      <button className="archive" onClick={() => onBack(id)}>
        Unarchive
      </button>
    );
  }
}

export default ButtonAction;
