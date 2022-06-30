import React, { useEffect, useState } from 'react';

const CompleteTask = () => {
    const [tasks, setTasks] = useState([])
    const {status}= tasks

    console.log(status);
    useEffect(() => {
        const url = `http://localhost:5000/to-do?status=${status}`
        fetch(url,{ 
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            CompleteTask

        </div>
    );
};

export default CompleteTask;