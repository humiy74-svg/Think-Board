import axios from "axios";
import type { Note } from "../types/types";
const API = axios.create({
  baseURL: "https://thinkboard.codewithmmd.ir/api",
  timeout: 10000,
});

export const getNotes = async (): Promise<Note[]> => {
  const response = await API.get<Note[]>("/notes");
  return response.data;
};
export const createNote = async (note: Omit<Note, "id">): Promise<Note> => {
  const response = await API.post<Note>("/notes", note);
  return response.data;
};
export const updateNote = async (note: Note): Promise<Note> => {
  const response = await API.put<Note>(`/notes/${note.id}`, note);
  return response.data;
};
export const deleteNote = async (id: string): Promise<void> => {
  await API.delete(`/notes/${id}`);
};
