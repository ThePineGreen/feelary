import React from "react";

export const Textarea = (props) => {

  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return (
    <textarea className='mt-1 block w-full rounded-md shadow-sm
    border-gray-300 dark:text-zinc-200
    focus:border-teal-300 dark:focus:border-teal-200 focus:ring focus:ring-teal-200 focus:ring-opacity-50 
    dark:bg-zinc-700 dark:border-black'
      value={props.value} onChange={handleChange} />
  );
}
