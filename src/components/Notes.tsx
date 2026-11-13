import NoteCard from "./NoteCard";

export default function Notes() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-t border-gray-300">
      <NoteCard
        title="Note 1"
        content="This is the content for note 1."
        onEdit={() => console.log("Editing note 1")}
        onDelete={() => console.log("Deleting note 1")}
      />
      <NoteCard
        title="Note 2"
        content="This is the content for note 2."
        onEdit={() => console.log("Editing note 2")}
        onDelete={() => console.log("Deleting note 2")}
      />
      <NoteCard
        title="Note 3"
        content="This is the content for note 3."
        onEdit={() => console.log("Editing note 3")}
        onDelete={() => console.log("Deleting note 3")}
      />
    </div>
  );
}
