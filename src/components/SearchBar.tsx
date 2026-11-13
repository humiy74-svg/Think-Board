interface SearchBarProps {
  onSearch: (query: string) => void;
}
export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        placeholder="Search notes..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </div>
  );
}
