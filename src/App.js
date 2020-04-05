import React, {Component} from 'react';
import TodoList from './TodoList';
import Form from './Form';
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    const todos = [
        {
          id: 1,
          title: "Hello, React!",
          desc: "Reactはじめました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux!",
          desc: "Reduxもはじめました",
          done: true
        }
      ]
      this.state = {
        todos: todos,
        countTodo: todos.length + 1,
      }
    }

    handleSubmit(e) {
      e.preventDefault();
      const title = e.target.title.value;
      const desc = e.target.desc.value;
      const todos = this.state.todos.slice()
      const countTodo = this.state.countTodo

      todos.push({
        id: countTodo,
        title: title,
        desc: desc,
        done: false,
      });

      this.setState({ todos })
      this.setState({ countTodo: countTodo + 1 })

      e.target.title.value = '';
      e.target.desc.value = '';
  }

  render() {
    return (
        <div className="main-area">

          <div className="content-area">
            <h1 className="page-title">ReactでTodoアプリをつくってみた</h1>

            <Form handleSubmit={this.handleSubmit.bind(this)} />

            <TodoList
              todos={this.state.todos}
            />
          </div>

        </div>
    );
  }
}

export default App