import NoteCreator from "./components/NoteCreator";
import Notes from "./components/Notes";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <NoteCreator />
      <Notes />
    </>
  );
}

export default App;
