import styles from './NoTaskAlert.module.css'

import { PiClipboardTextThin } from 'react-icons/pi'

export function NoTaskAlert() {
  return (
    <div className={styles.noTaskAlert}>
      <PiClipboardTextThin size={56} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
