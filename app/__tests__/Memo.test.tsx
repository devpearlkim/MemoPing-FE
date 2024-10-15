import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import Memo from '../components/Memo'
import '@testing-library/jest-dom'
import { IMemo } from '../utils/type'
import { mock } from 'node:test'

describe('Memo component', () => {
  const mockMemo: IMemo = {
    id: '12345',
    title: 'Initial Title',
    message: 'Initial Message',
  }

  const updateMemo = vi.fn()
  const deleteMemo = vi.fn()
  it('should enable inputs when Edit is clicked', async () => {
    render(
      <Memo memo={mockMemo} updateMemo={updateMemo} deleteMemo={deleteMemo} />,
    )

    const editButton = screen.getByRole('button', { name: /edit/i })
    await userEvent.click(editButton)

    const titleInput = screen.getByTestId(`title-${mockMemo.id}`)
    const messageInput = screen.getByTestId(`message-${mockMemo.id}`)

    expect(titleInput).not.toBeDisabled()
    expect(messageInput).not.toBeDisabled()
  })

  it('should call updateMemo with the updated title and message when Save is clicked', async () => {
    render(
      <Memo memo={mockMemo} updateMemo={updateMemo} deleteMemo={deleteMemo} />,
    )

    const editButton = screen.getByRole('button', { name: /edit/i })
    await userEvent.click(editButton)

    const titleInput = screen.getByTestId(`title-${mockMemo.id}`)
    const messageInput = screen.getByTestId(`message-${mockMemo.id}`)

    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, 'Updated Title')
    await userEvent.clear(messageInput)
    await userEvent.type(messageInput, 'Updated Message')

    const saveButton = screen.getByRole('button', { name: /save/i })
    await userEvent.click(saveButton)

    expect(updateMemo).toHaveBeenCalledWith(mockMemo.id, {
      title: 'Updated Title',
      message: 'Updated Message',
    })
  })

  it('should call onDelete when Delete is clicked', async () => {
    const deleteMemo = vi.fn()
    render(
      <Memo memo={mockMemo} updateMemo={() => {}} deleteMemo={deleteMemo} />,
    )

    const deleteButton = screen.getByRole('button', { name: /delete/i })
    await userEvent.click(deleteButton)

    expect(deleteMemo).toHaveBeenCalledWith(mockMemo.id)
  })
})
