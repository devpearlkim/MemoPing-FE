'use client'

import { Button } from '@nextui-org/button'
import CreateMemo from './components/CreateMemo'
import Memos from './components/Memos'
export default function DefaultPage() {
  const handleAddMemo = (newMemo) => {
    console.log('Memo added:', newMemo)
  }

  return (
    <>
      <CreateMemo onAddMemo={handleAddMemo} />
      <Memos />
    </>
  )
}
