import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

//传入state和父组件的属性,判断当前filter是否与state的filter一致
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

//传入dispatch和父组件属性,定义调度分发函数,更新state的filter
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

//将active和调度分发函数传入子组件Link
export default connect(mapStateToProps, mapDispatchToProps)(Link)