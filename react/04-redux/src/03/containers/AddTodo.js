import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  const submit = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    //由action的addTodo获取定义好的格式,通过dispatch分发出去
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={node => input = node} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

//使dispatch作为属性传入组件
export default connect()(AddTodo)
