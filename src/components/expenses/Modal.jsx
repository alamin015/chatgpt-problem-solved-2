/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
const initialData = {
  title: "",
  description: "",
  amount: "",
  date: "",
};

export default function Modal({ handleAddExpense, setIsOpen }) {
  const [formData, setFormData] = useState(initialData);
  const formRef = useRef(null);
  const modalRef = useRef(null);

  const handleTest = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleOnChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [inputName]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    handleAddExpense(formData);
    setFormData(initialData);
  };

  return (
    <div
      onClick={handleTest}
      ref={modalRef}
      className="absolute top-0 left-0 bg-gray-900 flex items-center justify-center w-full h-[100vh]"
    >
      <div
        ref={formRef}
        className="max-w-[500px] w-full border bg-white backdrop-blur-2xl border-gray-300 rounded-lg shadow-lg p-6"
      >
        <h2 className="text-center text-xl font-medium mb-3 text-blue-950">
          Expense Form
        </h2>
        <form>
          <input
            value={formData.title}
            onChange={handleOnChange}
            className="input"
            type="text"
            placeholder="Title"
            name="title"
          />
          <input
            value={formData.description}
            onChange={handleOnChange}
            className="input"
            type="text"
            placeholder="Description"
            name="description"
          />
          <input
            value={formData.amount}
            onChange={handleOnChange}
            className="input"
            type="number"
            placeholder="Amount"
            name="amount"
          />
          <input
            value={formData.date}
            onChange={handleOnChange}
            className="input placeholder:text-blue-950"
            type="date"
            name="date"
          />
          <div className="flex justify-end">
            <button
              onClick={handleForm}
              className="text-[16px] py-2 px-8 mt-3 rounded-lg bg-green-700 text-white font-medium hover:bg-green-900 transition-all"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
