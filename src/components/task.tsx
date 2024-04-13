import { Trash } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

export function Task(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <aside className="flex justify-between items-start text-grey-100 bg-grey-500 outline-none ring-1 ring-grey-400 p-4 rounded-lg">
      <div className="flex gap-3 items-baseline">
        <input {...props} />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
      </div>
      <button className="p-1 rounded-md hover:bg-grey-400">
        <Trash size={16} className="text-grey-300 hover:text-danger" />
      </button>
    </aside>
  )
}
