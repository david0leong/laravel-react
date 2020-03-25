import React from 'react'
import axios from 'axios'

import TodoForm from '../TodoForm'

const AddTodo = ({ history }) => {
    const handleSubmit = async values => {
        await axios.post('/api/todos', values)

        history.push('/')
    }

    return <TodoForm onSubmit={handleSubmit} />
}

export default AddTodo
