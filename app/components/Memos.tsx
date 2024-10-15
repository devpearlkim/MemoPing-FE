// components/Memos.tsx
import { IMemo } from '../utils/type'
import Memo from './Memo'

interface MemosProps {
  memos: IMemo[]
  updateMemo: (id: string, updatedMemo: IMemo) => void
}

const Memos = ({ memos, updateMemo }: MemosProps) => {
  if (memos.length === 0) {
    return <p>Write First Memo :)</p>
  }

  return (
    <ul>
      {memos.map((memo) => (
        <Memo memo={memo} key={memo.id} updateMemo={updateMemo} />
      ))}
    </ul>
  )
}

export default Memos
