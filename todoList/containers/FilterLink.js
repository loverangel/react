import React from 'react';
import { connect } from "react-redux";
import Link from "../components/Link";
import { setVisibility } from "../actions"

//一样的监听能力，第二个参数表示组件自身的props.其实这就是刷新组件的操作
const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

// 在react里使用action需要把action绑定到组件的props(而且还得声明propType)上，通过this.props来使用。
// 如果子组件需要使用这个action，还得一级一级往下传。
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibility(ownProps.filter))
		}
	}
}

// connect后面第二个括号是要添加prop的react组件
const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink;