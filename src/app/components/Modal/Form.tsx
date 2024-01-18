import React from 'react'
import successOrderToast from './OrderMessage'

const Form = () => {



    return (
        <div className="mt-4">
            <input
                type="text"
                id='name'
                placeholder="Nome"
                className="w-full rounded-full border bg-white border-gray-500 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
                type="email"
                id='email'
                placeholder="Email"
                className="w-full rounded-full border bg-white border-gray-500  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
                type="text"
                id='state'
                placeholder="Estado"
                className="w-full rounded-full border bg-white border-gray-500  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <input
                type="text"
                id='city'
                placeholder="Cidade"
                className="w-full rounded-full border bg-white border-gray-500  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
            />
            <div onClick={successOrderToast}
                className="flex justify-center">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">
                    Pedir
                </button>
            </div>
        </div>
    )
}

export default Form
