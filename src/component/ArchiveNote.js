import React from "react";
import OutputNoteItem from "./OutputNoteItem";

function ArchiveNote({ notes, onDelete, onBack, notesSearch, searchTitle }) {
  let activeNotes = null;
  if (searchTitle.length > 0) {
    activeNotes = notesSearch.filter((note) => note.archived === true);
  } else {
    activeNotes = notes.filter((note) => note.archived === true);
  }
  return (
    <div className="output-note">
      <div className="output-note__heading">
        <h2>Arsipan Anda</h2>
      </div>
      <div className="output-note__content">
        {activeNotes.length > 0 ? (
          activeNotes
            .filter((note) => note.archived === true)
            .map((note) => (
              <OutputNoteItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                titleAction={"Unarchive"}
                onBack={onBack}
              />
            ))
        ) : (
          <div className="output-note__empty">Tidak ada catatan..</div>
        )}
      </div>
    </div>
  );
}

export default ArchiveNote;
