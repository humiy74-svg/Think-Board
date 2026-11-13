import NoteCreator from "./components/NoteCreator";
import Notes from "./components/Notes";
import SearchBar from "./components/SearchBar";
import useNotes from "./hooks/useNotes";

function App() {
  const { notes, loading, error } = useNotes();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <SearchBar />
      <NoteCreator />
      <Notes />
    </>
  );
}

export default App;
