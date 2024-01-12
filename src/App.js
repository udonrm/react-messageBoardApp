import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ThreadsIndex from "./components/ThreadsIndex";
import ThreadsPost from "./components/ThreadsPost";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={[<Header />, <ThreadsIndex />]} />
        <Route path="/threads/new" element={<ThreadsPost />} />
        <Route path="/threads/:threadId/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
