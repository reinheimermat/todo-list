import { NotepadText } from 'lucide-react'

export function Default() {
  return (
    <div className="text-grey-300 flex flex-col justify-center items-center gap-4 pt-16 border-t rounded-lg border-grey-400 text-center">
      <div>
        <NotepadText className="size-12 text-grey-400" />
      </div>
      <div>
        <strong>You do not have tasks registered yet</strong>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  )
}
