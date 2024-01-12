import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const ThreadsPost = () => {
  const [threadData, setThreadData] = useState({
    title: "",
  });

  const handleInputChange = (e) => {
    setThreadData({ ...threadData, [e.target.name]: e.target.value });
  };

  const postNewThread = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(threadData),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewThread();
  };

  return (
    <>
      <Header />
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="mx-auto max-w-2xl">
          <div class="text-center">
            <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              スレッド新規作成
            </h2>
          </div>

          <div class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleSubmit}>
              <div class="mb-4 sm:mb-8">
                <label
                  for="hs-feedback-post-comment-name-1"
                  class="block mb-2 text-sm font-medium dark:text-white"
                >
                  タイトル
                </label>
                <input
                  type="text"
                  name="title"
                  id="hs-feedback-post-comment-name-1"
                  value={threadData.title}
                  onChange={handleInputChange}
                  class="py-3 px-4 block w-full bg-gray-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="スレッドタイトル"
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
          <div class="pt-8">
            <Link to="/">トップページに戻る</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreadsPost;
