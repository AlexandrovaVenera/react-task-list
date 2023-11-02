import React from "react";

function Menu() {
  return (
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="true" href="#">
            All
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
