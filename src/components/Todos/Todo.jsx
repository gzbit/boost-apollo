import React from 'react'
import { PropTypes } from 'prop-types'

const Todo = ({task}) => <div>{task}</div>

Todo.propTypes = {
    task: PropTypes.string.isRequired,
}

export default Todo