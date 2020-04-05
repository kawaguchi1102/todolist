import React, { Component} from "react";
import './css/form.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state={
            title:''
        }
    }

    handleTitleChange(place) {
        console.log(place);
        this.setState({place});
        //Todo:「やること」が入力されたら、ボタンをアクティブにする
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input className="form-title" name="title" type="text" value={this.state.title} onChange={e => this.handleTitleChange(e.target.value)} placeholder="やること"/>
                    <textarea className="form-desc" name="desc" placeholder="説明を入力" cols="30" rows="2"></textarea>
                    <button className="form-button" type="submit">Todoを作成</button>
                </form>
            </div>
        );
    }
}

export default Form