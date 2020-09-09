import React, { Component } from "react";

import Form from "./Form";

import "./Main.css";

import Tarefas from "./Tarefas";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  // adicionar tarefas
  handleSubmit = (event) => {
    event.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novaTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novaTarefas, novaTarefa],
        novaTarefa: "",
        index: -1,
      });
    } else {
      novaTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novaTarefas],
        index: -1,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  handleEdit = (event, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (event, index) => {
    const { tarefas } = this.state;
    const novaTarefas = [...tarefas];
    novaTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novaTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Reminders 🔖 </h1>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}
