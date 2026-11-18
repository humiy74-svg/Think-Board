import { deleteNote } from "../services/api";
import type { Note } from "../types/types";
import NoteCard from "./NoteCard";
interface NotesProps {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}
export default function Notes(props: NotesProps) {
  const handleDelete = (id: string, setLoading: (loading: boolean) => void) => {
    const deleter = async () => {
      try {
        setLoading(true);
        await deleteNote(id);
        props.onDelete(id);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    deleter();
  };
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-t border-gray-300">
      {props.notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={props.onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
