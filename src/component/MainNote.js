import React from "react";
import ArchiveNote from "./ArchiveNote";
import NoteInput from "./NoteInput";
import OutputNote from "./OutputNote";

function MainNote({
  notes,
  addNote,
  onDelete,
  onArchived,
  onBack,
  notesSearch,
  searchTitle,
}) {
  return (
    <div className="main-note">
      <NoteInput addNote={addNote} />
      <OutputNote
        notes={notes}
        onDelete={onDelete}
        onArchived={onArchived}
        notesSearch={notesSearch}
        searchTitle={searchTitle}
      />
      <ArchiveNote
        notes={notes}
        onDelete={onDelete}
        onBack={onBack}
        notesSearch={notesSearch}
        searchTitle={searchTitle}
      />
    </div>
  );
}

export default MainNote;
