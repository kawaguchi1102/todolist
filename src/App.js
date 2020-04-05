import React, {Component} from 'react';
import TodoList from './TodoList';
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
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
    }
  }

  render() {
    return (
        <div className="main-area">
          <div className="content-area">
            <h1 className="page-title">ReactでTodoアプリをつくってみた</h1>
            <TodoList
              todos={this.state.todos}
            />
          </div>
        </div>
    );
  }
}

export default App