'use client'

import { useState } from 'react'
import { IMemo } from '../utils/type'

interface CreateMemoProps {
  onAddMemo: (memo: IMemo) => void
}

export default function CreateMemo({ onAddMemo }: CreateMemoProps) {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (title.trim() === '' || message.trim() === '') {
      alert('Write message and title')
      return
    }
    onAddMemo({ title, message })
    setTitle('')
    setMessage('')
  }

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write your memo title"
      />
      <label htmlFor="message">Message</label>
      <input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your memo message"
      />
      <button onClick={handleSubmit}>Add Memo</button>
    </div>
  )
}
