interface NoteCreatorProps {
  title?: string;
  content?: string;
  onClick: (title: string, content: string) => void;
}

export default function NoteCreator(props: NoteCreatorProps) {
  let title = props.title ?? "";
  let content = props.content ?? "";
  return (
    <div className="p-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={title}
        onChange={(e) => {
          title = e.target.value;
        }}
      />
      <textarea
        name="content"
        placeholder="Write your note here..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => {
          content = e.target.value;
        }}
      >
        {content}
      </textarea>
      <button
        className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          props.onClick(title, content);
        }}
      >
        Create Note
      </button>
    </div>
  );
}
