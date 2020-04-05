import React, { Component} from "react";
import './css/form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state={
            title:''
        }
    }

    handleTitleChange(title) {
        this.setState({title});
    }

    render() {
        return (
            <div className="form">
                <form onSubmit = {this.props.handleSubmit}>
                    <input
                      className = "form-title"
                      name = "title"
                      type = "text"
                      onChange = { e => this.handleTitleChange(e.target.value) }
                      placeholder = "やること"
                    />
                    <textarea className="form-desc" name="desc" placeholder="説明を入力" cols="30" rows="2" />
                    <button
                      className={this.state.title === '' ? 'form-button' : 'form-button form-button--active'}
                      type="submit"
                    >Todoを作成</button>
                </form>
            </div>
        );
    }
}

export default Form