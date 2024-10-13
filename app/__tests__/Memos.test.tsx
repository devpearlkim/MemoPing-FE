import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Memos from '../components/Memos'
import '@testing-library/jest-dom'
import { IMemo } from '../utils/type'

describe('Memos component', () => {
  it('should render a list of memos', () => {
    const memos: IMemo[] = [
      { id: '1', title: 'First Title', message: 'First Memo' },
      { id: '2', title: 'Second Title', message: 'Second Memo' },
    ]

    render(<Memos memos={memos} />)

    memos.forEach((memo) => {
      expect(screen.getByTestId(`title-${memo.id}`)).toHaveValue(memo.title)
      expect(screen.getByTestId(`message-${memo.id}`)).toHaveValue(memo.message)
    })
  })

  it('should show a message when no memos are present', () => {
    render(<Memos memos={[]} />)

    expect(screen.getByText('Write First Memo :)')).toBeInTheDocument()
  })
})
