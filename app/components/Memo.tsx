import { useState } from 'react'
import { IMemo } from '../utils/type'

interface MemoProps {
  memo: IMemo
  updateMemo: (id: string, updatedMemo: IMemo) => void
  deleteMemo: (id: string) => void
}

const Memo = ({ memo, updateMemo, deleteMemo }: MemoProps) => {
  const { id } = memo
  const [title, setTitle] = useState<string>(memo.title)
  const [message, setMessage] = useState<string>(memo.message)
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleEditToggle = () => {
    if (isEditing && id) {
      updateMemo(id, { title, message })
    }
    setIsEditing(!isEditing)
  }

  const handleDelte = () => {
    if (id) deleteMemo(id)
  }

  return (
    <li className="block space-y-2 border-x border-t border-slate-300 bg-white p-4 first:rounded-t-md last:rounded-b-md last:border-b dark:border-slate-700 dark:bg-slate-950">
      <input
        id={`title-${id}`}
        value={title}
        disabled={!isEditing}
        onChange={(e) => setTitle(e.target.value)}
        data-testid={`title-${id}`}
      />
      <input
        id={`message-${id}`}
        value={message}
        disabled={!isEditing}
        onChange={(e) => setMessage(e.target.value)}
        data-testid={`message-${id}`}
      />
      <button onClick={handleEditToggle}>{isEditing ? 'save' : 'edit'}</button>
      <button onClick={handleDelte}>delete</button>
    </li>
  )
}

export default Memo
