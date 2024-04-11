import styles from './Header.module.css'

import toDoLogo from '../assets/todo_logo.svg'
import { NewTaskForm } from './NewTaskForm'
import { TaskType } from './Task'

interface HeaderProps {
  taskList: TaskType[]
  addNewTask: (newTask: TaskType) => void
}

export function Header({ taskList, addNewTask }: HeaderProps) {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="" />
      <NewTaskForm taskList={taskList} addNewTask={addNewTask} />
    </header>
  )
}
