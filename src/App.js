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
          title: "掃除をする",
          desc: "掃除機をかける",
          done: false
        },
        {
          id: 2,
          title: "買い物に行く",
          desc: "アイスを買う",
          done: false
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

  setTodoStatus(clickTodo) {
      const todos = this.state.todos.slice();
      const todo = todos[clickTodo.id - 1];
      todo.done = !todo.done;
      todos[clickTodo.id -1] = todo;

      this.setState({ todos });
  }


  render() {
    return (
        <div className="main-area">

          <div className="content-area">
            <h1 className="page-title">ReactでTodoリストをつくろう</h1>

            <Form handleSubmit={this.handleSubmit.bind(this)} />

            <TodoList
              todos={this.state.todos}
              setTodoStatus={this.setTodoStatus.bind(this)}
            />
          </div>

        </div>
    );
  }
}

export default App