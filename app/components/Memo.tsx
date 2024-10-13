import { useState } from 'react'
import { IMemo } from '../utils/type'

interface MemoProps {
  memo: IMemo
}

const Memo = ({ memo }: MemoProps) => {
  const { id } = memo
  const [title, setTitle] = useState<string>(memo.title)
  const [message, setMessage] = useState<string>(memo.message)

  return (
    <li className="block space-y-2 border-x border-t border-slate-300 bg-white p-4 first:rounded-t-md last:rounded-b-md last:border-b dark:border-slate-700 dark:bg-slate-950">
      <input
        id={`title-${id}`}
        value={title}
        disabled={true}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write your memo title"
        data-testid={`title-${id}`}
      />
      <input
        id={`message-${id}`}
        value={message}
        disabled={true}
        readOnly
        data-testid={`message-${id}`}
      />
    </li>
  )
}

export default Memo
