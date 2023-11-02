import React from 'react';
import './Search.css';
function Search() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid float-end header-font">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Search;
