import React, { useEffect, useState } from 'react'

const UpdateTodo = ({currentTodoId}) => {
    const [todo, setTodo] = useState('');
    const handleClick =() =>{

    }
    useEffect(()=>{
            
    },[]);
  return (
    <div>
        <form className='bg-white border-4 border-gray-900 p-12 m-12 rounded-xl w-1/3 mx-auto'>
                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900">Edit your Todo here</label>
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

export default UpdateTodo