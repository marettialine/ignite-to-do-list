import styles from './NewTaskForm.module.css'

import { FiPlusCircle } from 'react-icons/fi'
import { TaskType } from './Task'
import { ChangeEvent, useState } from 'react'

interface NewTaskFormProps {
  taskList: TaskType[]
  addNewTask: (newTask: TaskType) => void
}

export function NewTaskForm({ taskList, addNewTask }: NewTaskFormProps) {
  const [newTask, setNewTask] = useState<TaskType>({
    isTaskChecked: false,
    taskContent: '',
    createdAt: new Date(),
  })

  function changeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask({ ...newTask, taskContent: event.target.value })
  }

  function handleAddNewTask() {
    if (!taskAlreadyExists) {
      addNewTask(newTask)
      setNewTask({ ...newTask, taskContent: '' })
    }
  }

  const taskAlreadyExists = taskList.some(
    (task) => task.taskContent === newTask.taskContent,
  )

  return (
    <form className={styles.newTaskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask.taskContent}
        onChange={changeNewTask}
      />
      <button
        type="button"
        onClick={handleAddNewTask}
        disabled={taskAlreadyExists}
      >
        Criar <FiPlusCircle size={20} />
      </button>
    </form>
  )
}
