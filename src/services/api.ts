import axios from "axios";
import type { Note } from "../types/types";
const API = axios.create({
  baseURL: "https://thinkboard.codewithmmd.ir",
  timeout: 10000,
});

export const getNotes = async (): Promise<Note[]> => {
  const response = await API.get<Note[]>("/notes");
  return response.data;
};
