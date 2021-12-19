import Link from "next/link";
import React from "react";

export const Header = () => {

  const handleClick = () => {
    if ('theme' in localStorage) {
      localStorage?.theme === 'dark'
        ? localStorage.theme = 'light'
        : localStorage.theme = 'dark';
    } else {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? localStorage.theme = 'light'
        : localStorage.theme = 'dark';
    }

    const isDarkTheme = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorage.theme === 'dark' || isDarkTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="w-full p-4">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <h3 className="text-xl font-semibold font-['Arsenal'] text-black dark:text-zinc-100/60 hover:cursor-pointer">feelary</h3>
        </Link>
        <button
          className=" rounded hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-zinc-600 active:dark:bg-zinc-700 p-1"
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </header>
  );
};