import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos] = useState([])

    const loadTodos = async () => {
        const { data } = await axios.get('/api/todos')

        setTodos(data)
    }

    useEffect(() => {
        loadTodos()
    }, [])

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">All todos</div>

                    <div className="card-body">
                        <Link className="btn btn-primary btn-sm mb-3" to="/add">
                            Add new todo
                        </Link>

                        <ul className="list-group list-group-flush">
                            {todos.map(todo => (
                                <Link
                                    key={todo.id}
                                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                    to={`/${todo.id}`}
                                >
                                    {todo.description}
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos
