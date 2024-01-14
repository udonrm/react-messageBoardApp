import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export const CreatePost = ({ onPostCreated }) => {
  const [post, setPost] = useState({
    post: "",
  });

  const { threadId } = useParams();

  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const createNewPost = async (threadId) => {
    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(post),
        }
      );
      const data = await response.json();
      if (response.ok) {
        onPostCreated(data);
      }
      console.log("Success:", data.post);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewPost(threadId);
    setPost({ post: "" });
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="hs-feedback-post-comment-name-1"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                ポスト
              </label>
              <input
                type="text"
                name="post"
                id="hs-feedback-post-comment-name-1"
                value={post.post}
                onChange={handleInputChange}
                className="py-3 px-4 block w-full bg-gray-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="投稿しよう!"
              />
            </div>
            <div class="mt-6 grid">
              <button
                type="submit"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                投稿
              </button>
            </div>
          </form>
        </div>
        <div className="pt-8">
          <Link to="/">トップページに戻る</Link>
        </div>
      </div>
    </div>
  );
};
