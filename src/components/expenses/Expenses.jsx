import { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import ExpensesTopSection from "./expensesTopSection";
import Filtering from "./Filtering";
import Modal from "./Modal";
const expensesData = [
  {
    id: 1,
    title: "Buying a pizza",
    amount: 100,
    description:
      "The food quality of Pizza Hut is always good but what disappoints me most is the amount of toppings. They can be a bit more generous with their toppings",
    date: "2024-12-12",
  },
  {
    id: 2,
    title: "Buying a Football",
    amount: 500,
    description:
      "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal",
    date: "2012-08-12",
  },
];

export default function Expenses() {
  const [expenses, setExpenses] = useState(expensesData);
  const [isOpen, setIsOpen] = useState(false);
  const [isAscending, setIsAscending] = useState(false);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure that you want to delete item?")) {
      const updateItems = expenses.filter((i) => i.id !== id);
      setExpenses(updateItems);
    }
  };

  //   Add new Expense
  const handleAddExpense = (data) => {
    const id = expenses[expenses.length - 1].id + 1;
    setExpenses([...expenses, { id, ...data }]);
    setIsOpen(false);
  };

  // handle setIsopen
  const handleModalState = () => {
    setIsOpen(true);
  };

  // calculate total expenses
  const handleTotal = expenses.reduce((pre, next) => pre + next.amount, 0);

  //   sorting
  const handleSorting = (e) => {
    const rst = e.target.value;
    setIsAscending(rst === "ascending" ? true : false);
  };

  let allData;
  if (isAscending) {
    allData = expenses.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    allData = expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return (
    <div>
      {isOpen && <Modal handleAddExpense={handleAddExpense} />}
      <ExpensesTopSection handleModalState={handleModalState} />
      <Filtering handleTotal={handleTotal} handleSorting={handleSorting} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allData.map((expense) => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
