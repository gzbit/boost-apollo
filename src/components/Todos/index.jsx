import gql from 'graphql-tag'
import { PropTypes} from 'prop-types'
import React from 'react'
import { Query } from 'react-apollo'
import Todo from './Todo'

const TodosView = ({ error, loading, todos }) => {
    if (loading) return <div>LOADING ...</div>
    if (error) return <div>ERROR!</div>
    return (
        todos.map(todo => (
            <li key={todo.id}>
                <Todo task={todo.task} />
                <br />
            </li>
        ))
    )
}

TodosView.propTypes = {
    todos: PropTypes.array,
}

const GET_TODOS = gql`
    query {
        todos {
            id
            task
        }
    }
`

const Todos = () => (
    <Query query={GET_TODOS}>
        {
            ({ data: { todos = [] } = {}, error, loading }) => (
                <ul>
                    <TodosView
                        error={error}
                        loading={loading}
                        todos={todos}
                    />
                </ul>
            )
        }
    </Query>
)

export default Todos