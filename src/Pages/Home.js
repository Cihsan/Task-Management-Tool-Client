import React from 'react';
import Footer from '../Component/Footer';

const Home = () => {
    const enterkey = (event) => {
        event.preventDefault()
        const todo = event.target.do.value
        console.log(todo);
    }
    return (
        <div>

            <div>
                <div className='flex items-center justify-center mt-10'>
                    <form onSubmit={enterkey} className="w-full max-w-lg">
                        <div className="w-full">
                            <span class="block text-sm font-medium text-slate-700 mt-2">To Dos</span>
                            <textarea placeholder='Write Your To Dos' required name='do' class="mt-1 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                        " p></textarea>
                        </div>
                        <div className="w-full">
                            <input className="mt-4 cursor-pointer block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;