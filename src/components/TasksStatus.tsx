import { TaskType } from './Task'
import styles from './TasksStatus.module.css'

interface TasksStatusProps {
  taskList: TaskType[]
}

export function TasksStatus({ taskList }: TasksStatusProps) {
  const createdTasks = taskList.length
  const finishedTasks = (
    taskList
      ? taskList.filter((task: TaskType) => task.isTaskChecked === true)
      : []
  ).length

  return (
    <header className={styles.tasksStatus}>
      <div className={styles.status}>
        Tarefas criadas <span>{createdTasks}</span>
      </div>
      <div className={styles.status}>
        Concluídas <span>{finishedTasks}</span>
      </div>
    </header>
  )
}
