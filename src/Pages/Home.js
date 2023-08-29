import { useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer';
//import Task from '../Component/task';
import useApi from '../hooks/useApi';

const Home = () => {
    const [todos] = useApi()
    console.log(todos)
    const navigate = useNavigate()
    const postnote = (event) => {
        const taskName = event.target.note.value
        const postToDo = { taskName }
        const url = `https://task-management-ixa4.onrender.com/`
        console.log(url)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postToDo),
        })
            .then(res => res.json())
            .then(data => {
                //toast('Your Product Successfully Added');
                console.log(data);
            })
        event.preventDefault()
        event.target.reset()
    }
    return (
        <div>

            <div>
                <div className='flex items-center justify-center '>
                    <div>
                        <form onSubmit={postnote} className="">
                            <h1 className='text-center text-3xl'>Add Your To-do</h1>
                            <div className="">
                                <input className="mt-4 px-10 py-5 mb-5  bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" placeholder='Write Your To Dos' required name="note" />
                            </div>
                            <div className="">
                                <input className="hidden cursor-pointer" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <div class="overflow-x-auto">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(todo =>
                                    <tr key={todo._id}>
                                        <td>
                                            {
                                                !todo.status && <span>{todo.taskName}</span>
                                            }</td>
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

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <Footer></Footer>
        </div>
    );
};

export default Home;
