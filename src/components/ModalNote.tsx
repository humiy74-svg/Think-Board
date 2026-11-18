interface ModalNoteProps {
  title: string;
  content: string;
  show: () => void;
}

export default function ModalNote({ title, content, show }: ModalNoteProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          show();
        }
      }}
    >
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300">
          {title}
        </h2>
        <p>{content}</p>
      </div>
    </div>
  );
}
