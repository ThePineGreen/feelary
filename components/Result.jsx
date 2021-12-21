import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Calendar } from "./Calendar";
import { Progress } from "./Progress";
import {useTranslation} from "react-i18next";

export const Result = (props) => {
  const componentRef = useRef();
  const {t, i18n} = useTranslation();

  const handleClick = () => {
    props.resetForm();
  }

  const handleSave = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div ref={componentRef} className="mx-auto w-7/12 mt-16 print:flex print:items-center print:justify-center print:px-12 overflow-y-auto">
      <div className="flex flex-col">
        <div className="flex flex-row mb-4">
          <p className="hidden print:block font-['Arsenal'] font-semibold text-zinc-800 text-xl">feelary</p>
          <Calendar />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex flex-col mt-6">
              <Progress sqSize={props.result?.situation.length <150 ? 100 : 180} percentage={props.result?.percent} />
              <h4 className="text-xl mt-2 py-2 text-center text-zinc-800 dark:text-zinc-200">
                {props.result?.feel}
              </h4>
            </div>
            <div className="flex flex-col ml-8">
              <h3 className="text-2xl text-zinc-800 dark:text-zinc-200">{t('Situation')}</h3>
              <p className="mt-1 text-zinc-800 dark:text-zinc-400">
                {props.result?.situation}
              </p>
              <h3 className="mt-4 text-2xl text-zinc-800 dark:text-zinc-200">{t('Automatic thoughts')}</h3>
              <p className="mt-1 text-zinc-800 dark:text-zinc-400">
                {props.result?.thoughts}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleSave}
          className="mt-16 text-white dark:text-zinc-900 bg-teal-400 shadow-md shadow-teal-400/50 hover:bg-teal-500 active:bg-teal-600 py-2 px-4 rounded mx-auto print:hidden"
        >
          {t('Save as PDF')}
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="mt-16 ml-4 border text-teal-400 dark:text-teal-400 border-teal-400 shadow-md shadow-teal-400/20 hover:shadow-teal-400/50 active:shadow-teal-400/70 py-2 px-4 rounded mx-auto print:hidden"
        >
          {t('New record')}
        </button>
      </div>
    </div>
  );
}