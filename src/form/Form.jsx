import React from "react";
import "./Form.css";
import Menu from "./menu/Menu";
import NewTaskInput from "./add-new-task/NewTaskInput";
import TaskList from "./task-list/TaskList";

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
                <NewTaskInput />
                <div className="card text-center">
                  <Menu />
                  <div
                    className="card-body"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <TaskList />
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
