import React, { Component} from 'react';
import './css/todo.css';

class Todo extends Component {
    render() {
        const className = this.props.done ? 'done' : 'undone';
        const link = this.props.done ? '元に戻す' : '完了！'

        return(
            <li className={className}>
                <div className="todolist-title-group">
                    <p className="todolist-title">
                        <span className="todolist-num">{this.props.id}</span>
                        {this.props.title}
                    </p>
                    <a className="todolist-status" href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>
                </div>
                <p className="todolist-desc">{this.props.desc}</p>
            </li>
        );
    }
}

export default Todo