import React, { useState, useEffect } from "react";

const ThreadsIndex = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getAllThreads();
  }, []);

  const getAllThreads = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => response.json())
      .then((data) => setThreads(data))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {threads.map((thread, index) => (
            <div
              key={index}
              class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
              <div class="p-4 md:p-6">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  {thread.title}
                </h3>
                <p class="mt-3 text-gray-500">{thread.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreadsIndex;
