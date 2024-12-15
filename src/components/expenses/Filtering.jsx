/* eslint-disable react/prop-types */

const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

const years = [
  "2024",
  "2023",
  "2022",
  "2021",
  "2020", // Add more years as needed
];

export default function Filtering({ handleTotal, handleFilterChange }) {
  return (
    <div className="flex flex-wrap justify-between my-3 items-center gap-3">
      <p className="text-xl font-medium">
        Total Expenses:{" "}
        <span className="text-bold text-blue-950">{handleTotal}</span>
      </p>

      {/* select two   */}
      <select
        onChange={handleFilterChange}
        className="w-[200px] border p-2 rounded-lg"
        name="year"
      >
        <option value="">Select Year</option>
        {years.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      {/* select three   */}
      <select
        onChange={handleFilterChange}
        className="w-[200px] border p-2 rounded-lg"
        name="month"
      >
        <option value="">Select Month</option>
        {months.map((i) => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  );
}
