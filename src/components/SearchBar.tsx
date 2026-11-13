export default function SearchBar() {
  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        placeholder="Search notes..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
