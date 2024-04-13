import { NotepadText } from 'lucide-react'

export function Default() {
  return (
    <div className="text-grey-300 flex flex-col justify-center items-center gap-4 pt-16 border-t rounded-lg border-grey-400 text-center">
      <div>
        <NotepadText className="size-12 text-grey-400" />
      </div>
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
