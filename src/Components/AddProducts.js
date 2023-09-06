import React, { useState } from 'react'
import { AppwriteConfig } from '../appwrite/appwriteConfig';

const AddProducts = () => {
    const [product_name, setProduct_name] = useState('');
    const [product_desc, setProduct_desc] = useState('');
    const [product_mrp, setProduct_mrp] = useState(0);
    const [image_input, setImage_input] = useState(null);
    const [product_company, setProduct_company] = useState('');

    const appwriteConfig = new AppwriteConfig();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submit called');
        console.log('product_name '+product_name);
        console.log('product_desc '+product_desc);
        console.log('product_mrp '+product_mrp);
        console.log('image_input '+image_input);
        console.log('product_company '+product_company);

        appwriteConfig.createEvent(product_name,product_desc,product_mrp,image_input,product_company)
                        .then(res=>{
                            console.log(res);
                        });
        
    }

    return (
        <div>

            <form className='bg-gray-900 w-1/3 mx-auto p-12 m-12 rounded-lg' onSubmit={(e)=>handleSubmit(e)}>
                <div class="mb-6">
                    <label for="product_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">product_name</label>
                    <input type="text" id="product_name" onChange={(e)=>setProduct_name(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="product_desc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">product_desc</label>
                    <input type="text" id="product_desc" onChange={e=>setProduct_desc(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="product_mrp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">product_mrp</label>
                    <input type="number" id="product_mrp" onChange={e=>setProduct_mrp(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                    <input  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image_input" type="file" onChange={e=>setImage_input(e.target.files[0])} />
                </div>
                <div class="mb-6">
                    <label for="product_company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="product_company" onChange={e=>setProduct_company(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose product_company</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    )
}

export default AddProducts