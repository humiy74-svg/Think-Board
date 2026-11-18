import { useEffect, useState } from "react";
import { createNote } from "../services/api";
import type { Note } from "../types/types";

interface NoteCreatorProps {
  note: Partial<Note>;
  onCreate: () => void;
  onToast: (toast: {
    message: string;
    messageType: "success" | "error";
  }) => void;
}

export default function NoteCreator({
  note,
  onCreate,
  onToast,
}: NoteCreatorProps) {
  const [title, setTitle] = useState<string>(note.title || "");
  const [content, setContent] = useState<string>(note.content || "");
  useEffect(() => {
    setTitle(note.title || "");
    setContent(note.content || "");
  }, [note]);
  const [loading, setLoading] = useState(false);
  function handleClick() {
    const post = async () => {
      try {
        setLoading(true);
        await createNote({ title, content, id: note.id || "" });
        setTitle("");
        setContent("");
        onCreate();
        onToast({
          message: note.id
            ? "Note updated successfully"
            : "Note created successfully",
          messageType: "success",
        });
      } catch (err) {
        onToast({
          message: "Failed to create note",
          messageType: "error",
        });
      } finally {
        setLoading(false);
      }
    };
    post();
  }
  return (
    <div className="p-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        name="content"
        placeholder="Write your note here..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={content}
        rows={4}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />

      <div className="flex gap-2">
        <button
          className="mt-2 bg-green-500 hover:bg-green-700 disabled:bg-green-300 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
          disabled={
            loading ||
            title.length < 4 ||
            content.length < 10 ||
            (title === note.title && content === note.content)
          }
        >
          {note.title ? "Update" : "Create"} Note
        </button>
        {note.title && (
          <button
            className="mt-2 bg-gray-500 hover:bg-gray-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded"
            onClick={onCreate}
            disabled={loading}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
