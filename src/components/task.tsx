import { Trash } from 'lucide-react'
import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface TaskProps extends InputHTMLAttributes<HTMLInputElement> {
  completed?: boolean
  onDeletedTask: () => void
}

export function Task({ completed, onDeletedTask, ...props }: TaskProps) {
  return (
    <aside className="flex justify-between items-start text-grey-100 bg-grey-500 outline-none ring-1 ring-grey-400 p-4 rounded-lg">
      <div className="flex gap-3 place-items-start">
        <input
          {...props}
          className="rounded-full mt-1 bg-transparent ring-2 ring-blue border-none hover:ring-blueDark hover:bg-blue/20 checked:border-none checked:bg-purpleDark checked:ring-2 checked:ring-purpleDark checked:hover:bg-purple checked:hover:ring-purple focus:ring-offset-0 checked:focus:bg-purpleDark checked:focus:ring-purpleDark checked:focus:border-none"
        />
        <p
          className={twMerge(
            completed ? 'text-grey-300 line-through' : 'text-grey-100',
          )}
        >
          {props.title}
        </p>
      </div>
      <button
        className="p-1 rounded-md hover:bg-grey-400"
        onClick={onDeletedTask}
      >
        <Trash size={16} className="text-grey-300 hover:text-danger" />
      </button>
    </aside>
  )
}
