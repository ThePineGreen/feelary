import React from "react";

export const Input = (props) => {
  return <input
    type="text"
    value={props.value}
    onChange={(event) => { props.onChange(event.target.value) }}
    className='mt-1 block w-full rounded-md border-zinc-300 shadow-sm
  dark:bg-zinc-700 dark:border-black dark:text-zinc-200
  focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50'
  />
}