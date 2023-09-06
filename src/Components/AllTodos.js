import { Account, Client, Databases, ID } from "appwrite";
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import UpdateTodo from "./UpdateTodo";

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64f54d1a3c4bc3b4aa5c') // Your project ID
    ;

const AllTodos = () => {
    const [todos, setTodos] = useState(null)
    const [currentTodoId, setcurrentTodoId] = useState('');
    useEffect(() => {
        // const account = new Account(client);



        const promise = databases.listDocuments('64f6ebd8b54ff76991ec', '64f6ebe0e83bf7a473ce');
        promise.then(function (response) {
            console.log(response); // Success
            setTodos(response.documents);
            // setTodos('');
            
        }, function (error) {
            console.log(error); // Failure
        });
    }, []);

    return (
        <div>
           
            <h1 className=' text-white bg-gray-900 text-xl w-1/3 text-center mx-auto px-12 py-6 mt-12 mb-2 rounded-lg'>All todos here </h1>
            <div className='bg-gray-900 w-1/3 rounded-lg text-white mx-auto p-6 mb-12'>
                {
                    todos ? todos.map(td => {
                        return <div className="flex justify-between p-2 border-b-2">
                            <p key={td.$id} id={td.$id} className='m-2 '>{td.Todo}</p>
                            <button className="bg-white  px-2 text-gray-900 rounded-md" onClick={(e)=>setcurrentTodoId(td.$id)}>Edit</button>
                        </div>
                    }) : <p className="m-2 border-b-2 text-center">No todos found</p>
                }


            </div>
            <UpdateTodo currentTodoId={currentTodoId} />
        </div>
    )
}

export default AllTodos