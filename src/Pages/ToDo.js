import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdEditNote, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';
const ToDo = () => {
    const [todos, setTodos] = useApi()
    const navigate = useNavigate()
    //Compplete task
    const completebtn = (id) => {
        const ask = window.confirm('Have you Finished the task')
        if (ask) {
            const status = 'done'
            const url = `http://localhost:5000/to-dos/${id}`
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify({ status }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(res => res.json())
                .then((data) => (data));
        }

    }

    // Delete
    const deletebtn = id => {
        const ask = window.confirm('Are sure to delete')
        if (ask) {
            const url = `https://whispering-wildwood-58003.herokuapp.com/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = todos.filter(todo => todo._id !== id)
                        setTodos(remaining)
                        console.log('success');
                        //toast('Product Deleted Form Here');
                    }
                    else {
                        //toast.error('Failed to Delete Product');
                        console.log('failed');
                    }
                })
        }

    }
    return (
        <div>
            <h1 className='text-center text-3xl mb-5'>All To do List</h1>
            <div className='flex items-center justify-center'>
                <div class="overflow-x-auto">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>If Task Done</th>
                                <th>Task Name</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(todo =>
                                    <tr key={todo._id}>
                                        <td>
                                            {/* Done  Button*/}
                                            <label onClick={() => completebtn(todo._id)} for="done-modal" className='btn btn-success btn-outline'><BsCheckCircleFill className='text-2xl' /></label>

                                        </td>
                                        <td>
                                            <>
                                                {
                                                    !todo.status && <span>{todo.taskName}</span>
                                                }
                                            </>
                                        </td>
                                        <td>
                                            <div className="flex gap-5">

                                                {/* Edit button */}
                                                <button onClick={() => navigate(`/to-do/${todo._id}`)} className='btn btn-info btn-outline'><MdEditNote className='text-2xl' /></button>
                                                {/* Modal Part  */}


                                                {/* again try */}
                                                <label onClick={() => deletebtn(todo._id)} for="my-modal-6" className='btn btn-error btn-outline'><MdDelete className='text-2xl' /></label>


                                            </div>
                                        </td>

                                    </tr>
                                )
                            }
                        </tbody>
                        {
                            todos.length > 0 && <button onClick={() => navigate(`/completed-task/`)} className='btn btn-outline'>See Task</button>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDo;