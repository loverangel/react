import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_ALL":
			return todos;
		case "SHOW_COMPLETED":
			return todos.filter(t => t.completed)
		case "SHOW_ACTIVE":
			return todos.filter(t => !t.completed)
	}
}
//具备监听store的能力，只要store有更新，都会传到这里来,这个state就是新的了。
// 其实这就是刷新组件的操作
const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}
// 在react里使用action需要把action绑定到组件的props
// (而且还得声明propType)上
const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

// connect后面第二个括号是要添加prop的react组件
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList;