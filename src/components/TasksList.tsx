import { Task, TaskType } from './Task'

import styles from './TasksList.module.css'

interface TaskListProps {
  taskList: TaskType[]
  changeTaskCheck: (newTaskCheckStatus: TaskType) => void
  deleteTask: (newTaskCheckStatus: TaskType) => void
}

export function TasksList({
  taskList,
  changeTaskCheck,
  deleteTask,
}: TaskListProps) {
  const orderedTaskList = taskList.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return (
    <div className={styles.tasksList}>
      <ul className={styles.tasksContainer}>
        {orderedTaskList.map((task) => (
          <Task
            task={task}
            key={task.taskContent}
            changeTaskCheck={changeTaskCheck}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  )
}
