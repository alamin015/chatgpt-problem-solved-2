/* eslint-disable react/prop-types */
export default function ExpensesTopSection({ handleModalState }) {
  return (
    <div className="flex items-center justify-between py-4 gap-3">
      <h2 className="text-blue-950 font-medium text-2xl">Expense Tracker</h2>
      <button
        onClick={handleModalState}
        className="border border-blue-950 text-lg font-medium text-blue-950 py-2 px-6 rounded-lg hover:bg-blue-950 hover:text-white transition-all"
      >
        Add Expense
      </button>
    </div>
  );
}
