interface Note {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}
interface getNotesResponse {
  response: Note[];
  status: number;
  success: boolean;
}
interface createNoteResponse {
  response: Note;
  status: number;
  success: boolean;
}
interface toastMessage {
  message: string;
  messageType: "success" | "error";
}
export type { Note, getNotesResponse, createNoteResponse, toastMessage };
