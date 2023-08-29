import React, { useEffect, useState } from 'react';

const CompleteTask = () => {
    const [tasks, setTasks] = useState([])
    const { status } = tasks
    useEffect(() => {
        const url = `https://task-management-ixa4.onrender.com/to-do?status=${status}`
        fetch(url, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks,status])

    return (
        <div>
            
{
   tasks.length>0? <h1 className='text-center text-3xl mb-5'>You Have Finished Task</h1> :
   <h1 className='text-center text-3xl mb-5'> You Haven't Finish Any Task</h1>
}
            <div className='flex items-center justify-center'>
                <ul>
                    {
                        tasks.map(task =>
                            <>
                                {
                                    task.status && <li className='text-xl font line-through m-2'>{task.taskName}</li>
                                }
                            </>


                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default CompleteTask;
