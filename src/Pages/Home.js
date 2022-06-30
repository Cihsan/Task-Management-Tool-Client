import React from 'react';
import Footer from '../Component/Footer';
import ToDo from './ToDo';

const Home = () => {
    const postnote = (event) => {
        const taskName=event.target.note.value
        const postToDo ={taskName}
        const url = `http://localhost:5000/to-do`
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
                <div className='flex items-center justify-center mt-10'>
                    <form onSubmit={postnote} className="w-full max-w-lg">
                        
                        <div className="w-full">
                            <input className="mt-4 block md:w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="text" placeholder='Write Your To Dos' required name="note" />
                        </div>
                        <div className="w-full">
                            <input className="mt-4 cursor-pointer block md:w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            <ToDo/>
            <Footer></Footer>
        </div>
    );
};

export default Home;