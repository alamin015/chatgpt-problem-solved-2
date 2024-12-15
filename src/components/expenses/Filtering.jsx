/* eslint-disable react/prop-types */
export default function Filtering({ handleTotal, handleSorting }) {
  return (
    <div className="flex justify-between my-3 items-center gap-3">
      <p className="text-xl font-medium">
        Total Expenses:{" "}
        <span className="text-bold text-blue-950">{handleTotal}</span>
      </p>
      <select
        onChange={handleSorting}
        className="w-[200px] border p-2 rounded-lg"
        name="month"
      >
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>
    </div>
  );
}
