import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TaskEdit = () => {
    const { id } = useParams()
    const [task, settask] = useState([])
    console.log(task);
    useEffect(() => {
        fetch(`https://task-management-ixa4.onrender.com/to-do/${id}`)
            .then(res => res.json())
            .then(data => settask(data))
    }, [task,id])
    const editbtn = (e) => {
        const taskName = e.target.note.value

        //console.log(taskNam);

        const url = `https://task-management-ixa4.onrender.com/to-do/${id}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ taskName }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then((data) => console.log(data));
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div>
            <h1 className='text-center text-xl mb-2'>{task.taskName}</h1>

            <div className='flex items-center justify-center'>
                <div>
                    <form onSubmit={editbtn}>
                        <input className="py-2 px-2  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" placeholder='Cutomize Your To Do' required name="note"
                        />
                        <br />
                        <input className=' mt-5 btn btn-info' type="submit" value="Save" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default TaskEdit;
