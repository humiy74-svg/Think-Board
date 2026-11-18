interface DeleteModalProps {
  show: () => void;
  onDelete: () => void;
}

export default function DeleteModal({ show, onDelete }: DeleteModalProps) {
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
          Are you sure?
        </h2>
        <div className="flex justify-between">
          <button
            className="mt-2 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              show();
              onDelete();
            }}
          >
            Yes
          </button>
          <button
            className="mt-2 ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={show}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
