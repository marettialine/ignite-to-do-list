import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'
import { useEffect, useState } from 'react'
import { TaskType } from './components/Task'
import { TasksStatus } from './components/TasksStatus'
import { NoTaskAlert } from './components/NoTaskAlert'

function App() {
  const [taskList, setTaskList] = useState<TaskType[]>([])

  useEffect(() => {
    const localTaskList = localStorage.getItem('ignite-feed-tasklist')

    localTaskList && setTaskList(JSON.parse(localTaskList))
  }, [setTaskList])

  function addNewTask(newTask: TaskType) {
    let newTaskList
    const newTaskWithDate = { ...newTask, createdAt: new Date() }

    if (taskList) {
      newTaskList = [...taskList, newTaskWithDate]
    } else {
      newTaskList = [newTaskWithDate]
    }

    localStorage.setItem('ignite-feed-tasklist', JSON.stringify(newTaskList))

    setTaskList(newTaskList)
  }

  function changeTaskCheck(newTaskCheckStatus: TaskType) {
    const newTaskList = taskList?.filter(
      (task) => task.taskContent !== newTaskCheckStatus.taskContent,
    )

    if (newTaskList) {
      setTaskList([...newTaskList, newTaskCheckStatus])

      localStorage.setItem(
        'ignite-feed-tasklist',
        JSON.stringify([...newTaskList, newTaskCheckStatus]),
      )
    }
  }

  function deleteTask(taskToDelete: TaskType) {
    const tasksWithoutTaskToDelete = taskList?.filter(
      (task: TaskType) => task !== taskToDelete,
    )

    if (tasksWithoutTaskToDelete) {
      setTaskList(tasksWithoutTaskToDelete)

      localStorage.setItem(
        'ignite-feed-tasklist',
        JSON.stringify(tasksWithoutTaskToDelete),
      )
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header addNewTask={addNewTask} taskList={taskList || []} />

      <div className={styles.container}>
        <TasksStatus taskList={taskList || []} />

        {taskList.length > 0 ? (
          <TasksList
            taskList={taskList}
            changeTaskCheck={changeTaskCheck}
            deleteTask={deleteTask}
          />
        ) : (
          <NoTaskAlert />
        )}
      </div>
    </div>
  )
}

export default App
