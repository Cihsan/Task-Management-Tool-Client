import { useEffect, useState } from "react";

const useApi = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const url = `https://task-management-ixa4.onrender.com//`
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [todos])
    return [todos, setTodos]
};

export default useApi;
