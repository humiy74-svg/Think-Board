import { useState } from "react";
import NoteCreator from "./components/NoteCreator";
import Notes from "./components/Notes";
import SearchBar from "./components/SearchBar";
import useNotes from "./hooks/useNotes";
import type { Note, toastMessage } from "./types/types";
import Toast from "./components/Toast";

function App() {
  const [currentNote, setcurrentNote] = useState<Note | {}>({});
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<toastMessage>({
    message: "",
    messageType: "success",
  });
  const { notes, loading, error } = useNotes(currentNote);
  const handleEdit = (note: Note) => {
    setcurrentNote(note);
  };
  const handleCreate = () => {
    setcurrentNote({});
  };
  const handleDelete = (id: string) => {
    if ("id" in currentNote && currentNote.id === id) {
      setcurrentNote({});
    } else {
      setcurrentNote({ ...currentNote });
    }
  };
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const handleToast = (toast: toastMessage) => {
    setToastMessage(toast);
    setTimeout(() => {
      setToastMessage({
        message: "",
        messageType: "success",
      });
    }, 3000);
  };
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <NoteCreator
        note={currentNote}
        onCreate={handleCreate}
        onToast={handleToast}
      />
      {loading && !notes.length ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Notes
          notes={filteredNotes}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToast={handleToast}
        />
      )}
      {toastMessage.message && (
        <Toast
          message={toastMessage.message}
          messageType={toastMessage.messageType}
        />
      )}
    </>
  );
}

export default App;
