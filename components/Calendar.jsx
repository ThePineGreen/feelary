import React, { useEffect, useState } from "react";
import { getMonthName } from "../helpers/dateHelper";

export const Calendar = () => {
  const [date, setDate] = useState();
  const [month, setMonth] = useState('');

  useEffect(() => {
    let currentDate = new Date();
    setDate(currentDate.getDate());
    setMonth(getMonthName(currentDate.getMonth()));
  });

  return (
    <div className="flex flex-row flex-1 md:justify-end justify-center mb-6">
      <div className=" h-[4.5rem] w-[4.5rem] flex flex-col items-center border rounded border-zinc-400">
        <p className="text-sm mt-1 text-zinc-800 dark:text-zinc-400">{month}</p>
        <p className="text-4xl text-zinc-800 dark:text-zinc-400">{date}</p>
      </div>
    </div>
  );
}