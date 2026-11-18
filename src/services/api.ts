import axios, { type AxiosResponse } from "axios";
import type {
  createNoteResponse,
  getNotesResponse,
  Note,
} from "../types/types";
const API = axios.create({
  baseURL: "https://thinkboard.codewithmmd.ir/api",
  timeout: 10000,
});

export const getNotes = async (): Promise<getNotesResponse> => {
  const response = await API.get<getNotesResponse>("/notes");
  return response.data;
};
export const createNote = async (note: Note): Promise<createNoteResponse> => {
  let response: AxiosResponse<createNoteResponse, any, {}, any>;
  const data = { title: note.title, content: note.content };
  if (note.id)
    response = await API.put<createNoteResponse>(`/notes/${note.id}`, data);
  else response = await API.post<createNoteResponse>("/notes", data);
  return response.data;
};
