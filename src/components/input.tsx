import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="bg-grey-500 text-grey-300 p-4 rounded-lg text-lg outline-none focus:ring-2 focus:ring-purpleDark focus:text-grey-100"
    />
  )
}
