import { Task } from './components/task'
import rocket from './assets/rocket.svg'
import { Input } from './components/input'
import { PlusCircleIcon } from 'lucide-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { Default } from './components/default'

interface Task {
  id: number
  content: string
  completed: boolean
}

const initialTasks = [
  {
    id: 1,
    content: 'Create a new task',
    completed: false,
  },
  {
    id: 2,
    content:
      'Read the documentation to understand how to use TailwindCSS with React',
    completed: false,
  },
  {
    id: 3,
    content: 'Create a new project using Create React App',
    completed: false,
  },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [content, setContent] = useState('')
  const [completedTasks, setCompletedTasks] = useState(0)

  function onInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function onTaskCreated() {
    if (!content) return

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random(),
        content,
        completed: false,
      },
    ])
  }

  function onCheckedTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function onDeletedTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  function countCompletedTasks() {
    const completedTasks = tasks.filter((task) => task.completed)
    setCompletedTasks(completedTasks.length)
  }

  useEffect(() => {
    countCompletedTasks()
  }, [tasks])

  return (
    <>
      <header className="bg-grey-700 flex items-center justify-center gap-4 h-48">
        <img src={rocket} alt="purple and blue rocket image" />
        <h1 className="text-blue text-4xl font-black">
          to<span className="text-purpleDark">do</span>
        </h1>
      </header>
      <main className="container m-auto max-w-[736px] px-4 md:px-0">
        <div className="flex items-center gap-3 -mt-12">
          <Input
            placeholder="Add a new task"
            type="text"
            onChange={onInputChanged}
          />
          <button
            className="flex items-center gap-2 text-grey-100 bg-blueDark font-bold p-4 rounded-lg transition hover:bg-blue"
            onClick={onTaskCreated}
          >
            Criar <PlusCircleIcon />
          </button>
        </div>
        <div className="flex items-center justify-between mt-16 pb-6">
          <div className="flex items-center gap-2">
            <span className="text-blue text-sm font-bold">Created Tasks</span>
            <span className="py-[0.125rem] px-2 text-[0.75rem] font-bold bg-grey-400 text-grey-200 rounded-full">
              {tasks.length}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-purple font-bold text-sm">Completed</span>
            <span className="bg-grey-400 text-grey-200 px-2 py-[0.125rem] text-[0.75rem] font-bold rounded-full">
              {completedTasks} of {tasks.length}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {tasks.length === 0 ? (
            <Default />
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                type="checkbox"
                title={task.content}
                completed={task.completed}
                onChange={() => onCheckedTask(task.id)}
                onDeletedTask={() => onDeletedTask(task.id)}
              />
            ))
          )}
        </div>
      </main>
    </>
  )
}

export default App
