import { Client, Databases, ID } from "appwrite";
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64f54d1a3c4bc3b4aa5c') // Your project ID;


const AddTodo = () => {
    const [todo, setTodo] = useState('');
    const handleClick = () => {

        const databases = new Databases(client);
        const promise = databases.createDocument('64f6ebd8b54ff76991ec', '64f6ebe0e83bf7a473ce', ID.unique(), { Todo: todo });

        promise.then(function (response) {
            console.log(response); // Success
            if (response.$id) {
                toast('success')
            }
        }, function (error) {
            console.log(error); // Failure
        });
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <form className='bg-gray-900 p-12 m-12 rounded-xl w-1/3 mx-auto'>
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add your Todo here</label>
                    <input type="text"
                        id="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="i.e. I have to goto market..."
                        onChange={(e) => { console.log(todo); setTodo(e.target.value) }}
                        required />
                </div>


                <button type="button" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo