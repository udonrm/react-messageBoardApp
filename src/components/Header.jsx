import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-sky-500 border-b border-gray-200 text-sm py-3 sm:py-10 dark:bg-gray-800 dark:border-gray-700">
      <nav
        class="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-semibold text-white dark:text-gray-300 dark:hover:text-white">
            掲示板
          </h1>
        </div>
        <div class="flex items-center sm:ms-auto">
          <h2 class="flex items-center gap-x-2 font-medium text-white hover:text-yellow-100 dark:text-gray-400 dark:hover:text-blue-500">
            <Link to="/threads/new">スレッドをたてる</Link>
          </h2>
        </div>
      </nav>
    </header>
  );
};

export default Header;
