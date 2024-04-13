import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="bg-grey-500 border-none text-grey-300 p-4 rounded-lg text-lg outline-none ring-1 ring-grey-700 focus:ring-purpleDark focus:text-grey-100 w-full"
    />
  )
}
