import React, { Component} from "react";
import './css/form.css';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input className="form-title" name="title" type="text" placeholder="タイトル ＊必須"/>
                    <textarea className="form-desc" name="desc" placeholder="説明を入力" cols="30" rows="2"></textarea>
                    <button className="form-button" type="submit">Todoを作成</button>
                </form>
            </div>
        );
    }
}

export default Form