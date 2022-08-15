import React from "react";

// fitur search beluman

function Navigation({ onSearchChange, searchTitle }) {
  return (
    <header>
      <div className="nav-logo">
        <h1>🗒 Note App</h1>
      </div>
      <div className="nav-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          id="input-search"
          type="text"
          placeholder="Cari Catatan.."
          value={searchTitle}
          onChange={(event) => onSearchChange(event)}
        />
      </div>
    </header>
  );
}

export default Navigation;
