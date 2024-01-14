import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "./Header";
import { CreatePost } from "./CreatePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // App.jsで定義したthreadId
  // ThreadsIndexからPosts.jsxへの遷移時にuseParams()を使ってスレッドIDがthreadId変数に格納される
  const { threadId } = useParams();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  const addNewPost = (newPost) => {
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  };

  useEffect(() => {
    console.log(posts); // postsが更新されるたびにログを出力
  }, [posts]);

  useEffect(() => {
    getAllPosts(threadId);
  }, [threadId]);

  const getAllPosts = async (threadId) => {
    try {
      const response = await fetch(
        `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`
      );
      const data = await response.json();
      setPosts(data.posts);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <Header />
      <CreatePost onPostCreated={addNewPost} />

      <div className="max-w-[25rem] grid grid-cols-1 gap-4 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          スレッド：{decodeURIComponent(title)}
        </h2>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            >
              <div className="p-4 md:p-6">
                <h3 className="text-xm font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                  {post.post}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-gray-800 dark:text-gray-300">
            スレッド内に投稿データはありません。
          </h1>
        )}
      </div>
    </>
  );
};

export default Posts;
