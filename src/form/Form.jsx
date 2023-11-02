import React from 'react';
import './Form.css';

function Form() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body mask-custom p-5">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4 text-white">Task List</h2>
                </div>
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
                <div className="card text-center">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="true"
                          href="#"
                        >
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                        >
                          Active
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          tabindex="-1"
                          aria-disabled="true"
                        >
                          Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="card-body"
                    style={{ backgroundColor: '#fff' }}
                  >
                    <ul className="list-group mb-0">
                      <li
                        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                          checked
                        />
                        <s>Cras justo odio</s>
                      </li>
                      <li
                        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                          checked
                        />
                        <s>Dapibus ac facilisis in</s>
                      </li>
                      <li
                        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Morbi leo risus
                      </li>
                      <li
                        className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Porta ac consectetur ac
                      </li>
                      <li
                        className="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                        style={{ backgroundColor: '#f4f6f7' }}
                      >
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          aria-label="..."
                        />
                        Vestibulum at eros
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
