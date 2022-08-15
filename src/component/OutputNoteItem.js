import React from "react";
import ButtonAction from "./ButtonAction";
import ButtonDelete from "./ButtonDelete";

function OutputNoteItem({
  title,
  createdAt,
  body,
  id,
  titleAction,
  onDelete,
  onBack,
  onArchived,
}) {
  return (
    <div className="note-item__body" id={id}>
      <div className="note-item__title">
        <h3 className="judul">{title}</h3>
        <p className="tanggal">{createdAt}</p>
        <p className="text">{body}</p>
      </div>
      <div className="note-item__button">
        <ButtonDelete onDelete={onDelete} id={id} />
        <ButtonAction
          id={id}
          titleAction={titleAction}
          onArchived={onArchived}
          onBack={onBack}
        />
      </div>
    </div>
  );
}

export default OutputNoteItem;
