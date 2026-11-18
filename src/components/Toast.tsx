import type { toastMessage } from "../types/types";

export default function Toast({ message, messageType }: toastMessage) {
  const bgClass = messageType === "success" ? "bg-green-500" : "bg-red-500";
  return (
    <div
      className={`${bgClass} text-white p-4 rounded-md fixed bottom-4 right-4`}
    >
      {message}
    </div>
  );
}
