import React from "react";
import OutputNoteItem from "./OutputNoteItem";

function OutputNote({ notes, onDelete, onArchived, notesSearch, searchTitle }) {
  const showModal = () => {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.add("show");
  };
  let activeNotes = null;
  if (searchTitle.length > 0) {
    activeNotes = notesSearch.filter((note) => note.archived === false);
  } else {
    activeNotes = notes.filter((note) => note.archived === false);
  }
  return (
    <div className="output-note">
      <div className="output-note__heading">
        <h2>Catatan Anda</h2>
        <button className="add-button" onClick={showModal}>
          +
        </button>
      </div>
      <div className="output-note__content">
        {activeNotes.length > 0 ? (
          activeNotes
            .filter((note) => note.archived === false)
            .map((note) => (
              <OutputNoteItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                titleAction={"Archive"}
                onArchived={onArchived}
              />
            ))
        ) : (
          <div className="output-note__empty">Tidak ada catatan..</div>
        )}
      </div>
    </div>
  );
}

export default OutputNote;
