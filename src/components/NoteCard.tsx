interface NoteCardProps {
  title: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
}
export default function NoteCard(props: NoteCardProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="text-lg font-bold mb-2">{props.title}</h3>
      <p className="text-gray-600">{props.content}</p>
      <button
        onClick={props.onEdit}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>
      <button
        onClick={props.onDelete}
        className="mt-2 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
}
