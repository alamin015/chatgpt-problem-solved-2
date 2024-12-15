import moment from "moment";

/* eslint-disable react/prop-types */
export default function ExpenseCard({ expense, handleDelete }) {
  return (
    <div className="p-5 border border-blue-950 rounded-lg shadow-lg hover:bg-blue-50 transition-all">
      <h2 className="text-xl font-bold text-blue-950">
        Total Expenses: {expense.amount}
      </h2>
      <h3 className="text-[16px] font-medium text-blue-950 my-2">
        {expense.title}
      </h3>
      <p className="text-gray-800 text-[16px] text-justify">
        {expense.description}
      </p>
      <p className="my-2">
        <span className="font-medium">Issue date : </span>{" "}
        {moment(expense.date).format("LL")}
      </p>
      <div className="flex justify-end">
        <button
          onClick={() => handleDelete(expense.id)}
          className="text-[16px] py-2 px-8 rounded-lg bg-red-700 text-white font-medium hover:bg-red-900 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
