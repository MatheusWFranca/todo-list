import React from 'react';

import PropTypes from 'prop-types';

import { FaEdit, FaRegTrashAlt, FaCheck } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({
  tarefas, handleEdit, handleDelete, handleCheck,
}) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(event) => handleEdit(event, index)}
              className="edit"
            />
            <FaRegTrashAlt
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />

            <FaCheck
              className="check"
              onClick={(event) => handleCheck(event, index)}
            />

          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
};
