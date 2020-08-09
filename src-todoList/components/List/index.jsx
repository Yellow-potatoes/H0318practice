import React, { Component } from 'react'
import Item from '@/components/Item'
import './index.css'
import PropTypes from 'prop-types'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    checkTodo: PropTypes.func.isRequired,
  }
  render() {
    const { todos, checkTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(
            todo =>
              <Item
                key={todo.id}
                {...todo}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
              />
          )
        }
      </ul>
    )
  }
}
