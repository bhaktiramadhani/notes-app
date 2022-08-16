import React from "react";
import autoBind from "auto-bind";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: 50,
      title: "",
      body: "",
    };
    autoBind(this);
  }
  handleTitle(event) {
    event.target.value = event.target.value.slice(0, 50);
    const characterText = document.querySelector(".character-text");
    if (event.target.value.length === 50) {
      characterText.style.color = "red";
    } else if (event.target.value.length !== 50) {
      characterText.removeAttribute("style");
    }
    this.setState(() => {
      return {
        character: 50 - event.target.value.length,
        title: event.target.value,
      };
    });
  }

  handleBody(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  handleClose(event) {
    const modalContainer = document.querySelector(".modal-container");
    modalContainer.classList.remove("show");
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title === "" || this.state.body === "") {
      alert("isi terlebih dahulu");
    } else {
      this.props.addNote(this.state);
      this.setState(() => {
        return {
          character: 50,
          title: "",
          body: "",
        };
      });
      this.handleClose();
    }
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal">
          <h2>Tambah Catatan</h2>
          <form className="input-form" onSubmit={this.handleSubmit}>
            <p className="character-text">
              Sisa Karakter: {this.state.character}
            </p>
            <label>Judul Catatan</label>
            <input
              type="text"
              id="input-judul"
              placeholder="Judul catatan.."
              onChange={this.handleTitle}
              value={this.state.title}
              autoComplete="off"
            />
            <textarea
              type="text"
              id="input-text"
              placeholder="Isi catatan.."
              onChange={this.handleBody}
              value={this.state.body}
            ></textarea>
            <button className="add-note" type="submit">
              Tambah
            </button>
            <button
              className="close-button"
              type="button"
              onClick={this.handleClose}
            >
              Batal
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteInput;
