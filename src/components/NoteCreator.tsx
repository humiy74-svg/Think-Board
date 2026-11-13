export default function NoteCreator() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="content"
        id=""
        placeholder="Write your note here..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Create Note
      </button>
    </div>
  );
}
