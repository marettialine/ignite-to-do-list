import { ChangeEvent } from 'react'
import styles from './Task.module.css'

import { GoTrash } from 'react-icons/go'

export interface TaskType {
  taskContent: string
  isTaskChecked: boolean
  createdAt: Date
}

interface TaskProps {
  task: TaskType
  changeTaskCheck: (newTaskCheckStatus: TaskType) => void
  deleteTask: (newTaskCheckStatus: TaskType) => void
}

export function Task({ task, changeTaskCheck, deleteTask }: TaskProps) {
  function handleChangeTaskCheck(event: ChangeEvent<HTMLInputElement>) {
    changeTaskCheck({ ...task, isTaskChecked: event.target.checked })
  }

  return (
    <li className={styles.task}>
      <div className={styles.taskInfo}>
        <input
          id={'checkbox' + task.taskContent}
          type="checkbox"
          checked={task.isTaskChecked}
          onChange={handleChangeTaskCheck}
        />
        <label htmlFor={'checkbox' + task.taskContent}>
          <span className={styles.checkmark}></span>
        </label>

        <p>{task.taskContent}</p>
      </div>
      <button className={styles.deleteBtn} onClick={() => deleteTask(task)}>
        <GoTrash size={14} />
      </button>
    </li>
  )
}
