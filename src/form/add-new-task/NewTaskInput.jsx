import React from "react";

function NewTaskInput() {
  return (
    <form className="d-flex justify-content-center align-items-center">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New task..."
          aria-label="task"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default NewTaskInput;
