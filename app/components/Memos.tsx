// components/Memos.tsx
import { IMemo } from '../utils/type'
import Memo from './Memo'

interface MemosProps {
  memos: IMemo[]
}

const Memos = ({ memos }: MemosProps) => {
  if (memos.length === 0) {
    return <p>Write First Memo :)</p>
  }

  return (
    <ul>
      {memos.map((memo) => (
        <Memo memo={memo} key={memo.id} />
      ))}
    </ul>
  )
}

export default Memos
