import React, { useState, useEffect } from "react";

export const Threads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getAllThreads();
  }, []);

  const getAllThreads = () => {
    fetch("https:railway.bulletinboard.techtrain.dev/threads")
      .then((response) => response.json())
      .then((data) => setThreads(data))
      .catch((e) => console.log(e));
  };
  return (
    <>
      {threads.map((thread, index) => (
        <div key={index}>
          <h3>{thread.title}</h3>
        </div>
      ))}
    </>
  );
};
