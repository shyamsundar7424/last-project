import Comment from "./Comment";
const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/4 ">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea
          className="w-full p-4 bg-gray-100 rounded-xl"
          placeholder="Write a comment..."
        />
        <button className="bg-blue-800 text-white px-4 py-3 rounded-xl font-medium">
          Sand
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default Comments;
