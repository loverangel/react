import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "../actions";

let AddTodo = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                //这里并没有用 action绑定操作,而是自己直接dispatch action
                dispatch(addTodo(input.value))
                input.value = ""
            }}>
                <input placeholder="你想做点什么" ref={r => input = r} className="todo-input"/>
                <button type="submit" className="todo-btn">
                    添加任务
                </button>
            </form>
        </div>
    );
}
// connect后面第二个括号是要添加prop的react组件
AddTodo = connect()(AddTodo);

export default AddTodo;