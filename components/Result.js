import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { getMonthName } from "../helpers/dateHelper";
import { Calendar } from "./Calendar";
import { Progress } from "./Progress";

export const Result = (props) => {
  const componentRef = useRef();

  const handleClick = () => {
    props.resetForm();
  }

  const handleSave = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div ref={componentRef} className="mx-auto max-w-4xl mt-16 print:flex print:items-center print:justify-center print:px-12">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="hidden print:block font-['Arsenal'] font-semibold text-zinc-800 text-xl">feelary</p>
          <Calendar />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col mt-6">
              <Progress sqSize={180} percentage={props.result?.percent} />
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
          <div className="flex flex-row">
            <button
              type="button"
              onClick={handleSave}
              className="mt-16 text-white dark:text-zinc-900 bg-emerald-400 shadow-md shadow-emerald-400/50 hover:bg-emerald-500 active:bg-emerald-600 py-2 px-4 rounded mx-auto print:hidden"
            >
              Save as PDF
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="mt-16 border text-emerald-400 dark:text-emerald-400 border-emerald-400 shadow-md shadow-emerald-400/20 hover:shadow-emerald-400/50 active:shadow-emerald-400/70 py-2 px-4 rounded mx-auto print:hidden"
            >
              New record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}