'use client'

import { useState } from 'react'
import CreateMemo from './components/CreateMemo'
import Memos from './components/Memos'
import { IMemo } from './utils/type'
import { v4 as uuidv4 } from 'uuid'

export default function DefaultPage() {
  const [memos, setMemos] = useState<IMemo[]>([])

  const handleAddMemo = (newMemo: IMemo) => {
    const memoWithId = { id: uuidv4(), ...newMemo }
    setMemos((prevMemos) => [...prevMemos, memoWithId])
  }

  const updateMemo = (id: string, updatedMemo: IMemo) => {
    memos.map((memo) => {
      if (memo.id === id) return { ...memo, ...updatedMemo }
    })
  }

  const deleteMemo = (id: string) => {
    const newMemos = memos.filter((memo) => memo.id !== id)
    setMemos(newMemos)
  }

  return (
    <>
      <CreateMemo onAddMemo={handleAddMemo} />
      <Memos memos={memos} updateMemo={updateMemo} deleteMemo={deleteMemo} />
    </>
  )
}
