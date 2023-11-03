import React from 'react';
import './Form.css';
import Menu from './menu/Menu';
import NewTaskInput from './add-new-task/NewTaskInput';
import TaskList from './task-list/TaskList';

function Form() {
  const data = [
    { id: 1, text: 'Cras justo odio', checked: true },
    { id: 2, text: 'Dapibus ac facilisis in', checked: true },
    { id: 3, text: 'Morbi leo risus', checked: false },
    { id: 4, text: 'Porta ac consectetur ac', checked: false },
  ];
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
                    style={{ backgroundColor: '#fff' }}
                  >
                    <TaskList data={data} />
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
