import React from "react";
import { dataDate, noteData } from "../utils/data";
import Navigation from "./Navigation";
import MainNote from "./MainNote";
import Swal from "sweetalert2";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: noteData(),
      notesSearch: [],
      searchTitle: "",
    };

    this.onAddNote = this.onAddNote.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchived = this.onArchived.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
    this.searchTitleHandler = this.searchTitleHandler.bind(this);
  }

  onAddNote({ title, body }) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Catatan berhasil ditambahkan",
      showConfirmButton: true,
    });
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: dataDate(),
          },
        ],
      };
    });
  }

  // fitur delete selesai
  onDelete(id) {
    Swal.fire({
      title: "Anda yakin untuk menghapus Catatan ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya Hapus",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "tunggu sebentar",
          timer: 1000,
          timerProgressBar: true,
        });
        setTimeout(() => {
          Swal.fire("Terhapus", `Catatan Telah Terhapus`, "success");
          const myNotes = this.state.notes.filter((note) => note.id !== id);
          if (this.state.notesSearch.length > 0) {
            this.setState({ notesSearch: myNotes });
            this.setState({ searchTitle: "" });
            this.setState({ notes: myNotes });
          } else {
            this.setState({ notes: myNotes });
          }
        }, 1000);
      }
    });
  }

  onArchived(id) {
    const checked = this.state.notes.filter((note) => note.id === id);
    const condision = (checked[0].archived = true);
    this.setState({ condision });
  }

  onBack(id) {
    const checked = this.state.notes.filter((note) => note.id === id);
    const condision = (checked[0].archived = false);
    this.setState({ condision });
  }

  onSearchChangeHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchTitle: event.target.value,
      };
    });
    this.searchTitleHandler(event.target.value);
  }

  searchTitleHandler(searchedTitle) {
    let searchedNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchedTitle.toLowerCase())
    );

    if (this.state.searchTitle.length >= 0) {
      this.setState({ notesSearch: null });
      this.setState({ notesSearch: searchedNotes });
    } else {
      this.setState({ notesSearch: null });
      this.setState({ notesSearch: this.state.notes });
    }
  }
  render() {
    return (
      <>
        <Navigation
          onSearchChange={this.onSearchChangeHandler}
          searchTitle={this.state.searchTitle}
        />
        <MainNote
          notes={this.state.notes}
          addNote={this.onAddNote}
          onDelete={this.onDelete}
          onArchived={this.onArchived}
          onBack={this.onBack}
          notesSearch={this.state.notesSearch}
          searchTitle={this.state.searchTitle}
        />
      </>
    );
  }
}

export default NoteApp;
