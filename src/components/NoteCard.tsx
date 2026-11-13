import type { Note } from "../types/types";

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}
export default function NoteCard(props: NoteCardProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="text-lg font-bold mb-2">{props.note.title}</h3>
      <p className="text-gray-600">{props.note.content}</p>
      <button
        onClick={() => {
          props.onEdit(props.note);
        }}
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>
      <button
        onClick={() => {
          props.onDelete(props.note.id);
        }}
        className="mt-2 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete
      </button>
    </div>
  );
}
