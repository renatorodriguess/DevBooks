import successOrderToast from './OrderMessage';
import api from '@/app/services/api';
import { useState } from 'react';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    state: '',
    city: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await api.post('users', formData);



      successOrderToast();

      setFormData(initialFormData);

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <form method='post' action="/users" onSubmit={handleSubmit}>
      <div className="mt-4">
        <input
          type="text"
          id="name"
          placeholder="Nome"
          className="w-full rounded-full border bg-white border-gray-500 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full rounded-full border bg-white border-gray-500  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="text"
          id="state"
          placeholder="Estado"
          className="w-full rounded-full border bg-white border-gray-500  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          onChange={handleChange}
          value={formData.state}
          required
        />
        <input
          type="text"
          id="city"
          placeholder="Cidade"
          className="w-full rounded-full border bg-white border-gray-500  dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
          onChange={handleChange}
          value={formData.city}
          required
        />
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
