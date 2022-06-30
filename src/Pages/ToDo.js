import React, { useEffect, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdEditNote, MdDelete } from 'react-icons/md';
const ToDo = () => {
    const [todos, setTodos] = useState([])
    console.log(todos);
    useEffect(() => {
        const url = `http://localhost:5000/to-do/`
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])


    //Compplete task
    const completebtn = (id) => {
        console.log(todos);
        const url = `http://localhost:5000/to-do/${id}`
        fetch(url, {
            method: 'PUT',
            /* body: JSON.stringify({
             
            }), */
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then((data) => console.log(data));

    }

    //edit task

    const editbtn = (id) => {
        const url = `http://localhost:5000/to-do/${id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then((data) => console.log(data));

    }


    // Delete
    const deletebtn = id => {
        const url = `http://localhost:5000/to-do/${id}`
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
    return (
        <div>
            <h1 className='text-center text-3xl mb-5'>All To do List</h1>

            <div className='flex items-center justify-center'>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr>
                                    <td>{todo.taskName}</td>
                                    <td>
                                    <div className="flex gap-5">
                                {/* Done  Button*/}
                                <label for="done-modal" className='btn btn-success'><BsCheckCircleFill className='text-2xl' /></label>
                                {/* Modal Part  */}
                                <input type="checkbox" id="done-modal" class="modal-toggle" />
                                <div class="modal ">
                                    <div class="modal-box bg-green-200">
                                        <h3 class="font-bold text-lg text-accent">Have you Completed</h3>

                                        <div class="modal-action">
                                            <label onClick={() => completebtn(todo._id)} for="done-modal" class="btn">Completed</label>
                                            <label for="done-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Edit button */}
                                <label for="edit-modal" className='btn btn-info'><MdEditNote className='text-2xl' /></label>
                                {/* Modal Part  */}
                                <input type="checkbox" id="edit-modal" class="modal-toggle" />
                                <div class="modal ">
                                    <div class="modal-box bg-sky-100">
                                        <h3 class="font-bold text-lg text-accent">You Can Customize The Task</h3>
                                        <p>{todo.taskName}</p>

                                        <input className='bg-gray-100 px-5 py-5' type="text" placeholder='Write To Customize' />
                                        <div class="modal-action">
                                            <label onClick={() => editbtn(todo._id)} for="edit-modal" class="btn">Edit</label>
                                            <label for="edit-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        </div>
                                    </div>
                                </div>



                                {/* Delete Button */}
                                <label for="delete-modal" className='btn btn-warning'><MdDelete className='text-2xl' /></label>
                                {/* Modal Part  */}
                                <input type="checkbox" id="delete-modal" class="modal-toggle" />
                                <div class="modal ">
                                    <div class="modal-box bg-yellow-100">
                                        <h3 class="font-bold text-lg text-accent">Are Sure To Delete</h3>

                                        <div class="modal-action">
                                            <label onClick={() => deletebtn(todo._id)} for="delete-modal" class="btn">Delete</label>
                                            <label for="delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default ToDo;