import { useEffect, useState } from "react";
import { getNotes } from "../services/api";
import type { Note } from "../types/types";

export default function useNotes(dependency: Note | {}) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const data = await getNotes();
        setNotes(data.response);
      } catch (err) {
        setError("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, [dependency]);

  return { notes, loading, error };
}
