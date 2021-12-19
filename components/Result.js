import React from "react";
import { Progress } from "./Progress";

export const Result = (props) => {

  const handleClick = () => {
    props.resetForm();
  }

  return (
    <div className="mx-auto max-w-4xl mt-16">
      <div className="flex flex-col">
        <div className="flex">
          <div className="flex flex-col pt-10">
            <Progress percentage={props.result?.percent} />
            <h4 className="text-xl mt-2 py-2 text-center text-zinc-800 dark:text-zinc-200">
              {props.result?.feel}
            </h4>
          </div>
          <div className="flex flex-col ml-8">
            <h3 className="text-2xl text-zinc-800 dark:text-zinc-200">Situation</h3>
            <p className="mt-1 text-zinc-800 dark:text-zinc-400">
              {props.result?.situation}
            </p>
            <h3 className="mt-4 text-2xl text-zinc-800 dark:text-zinc-200">Automatic Thoughts</h3>
            <p className="mt-1 text-zinc-800 dark:text-zinc-400">
              {props.result?.thoughts}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="mt-16 text-white dark:text-zinc-900 bg-teal-500 shadow-md shadow-teal-500/50 py-2 px-4 rounded mx-auto print:hidden"
        >
          Back to home
        </button>
      </div>
    </div>
  );
}