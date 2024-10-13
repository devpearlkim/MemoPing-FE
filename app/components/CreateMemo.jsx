'use client'
import { useState } from 'react'

export default function CreateMemo({ onAddMemo }) {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (message.trim() === '') {
      alert('Write message please')
      return
    }
    onAddMemo(message)
    setMessage('')
  }

  return (
    <div>
      <label htmlFor="message">Message</label>
      <input
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your memo"
      />
      <button onClick={handleSubmit}>Add Memo</button>
    </div>
  )
}
