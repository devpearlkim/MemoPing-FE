import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import CreateMemo from '../components/CreateMemo.jsx'

describe('CreateMemo component', () => {
  it('should call onAddMemo with input value when button is clicked', async () => {
    const onAddMemo = vi.fn()
    render(<CreateMemo onAddMemo={onAddMemo} />)

    const input = screen.getByLabelText(/message/i)
    const button = screen.getByRole('button', { name: /add memo/i })

    await userEvent.clear(input)
    await userEvent.type(input, 'FirstMemo')
    await userEvent.click(button)

    expect(onAddMemo).toHaveBeenCalledTimes(1)
    expect(onAddMemo).toHaveBeenCalledWith('FirstMemo')
  })

  it('should show an alert if the input is empty when adding a memo', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

    const onAddMemo = vi.fn()
    render(<CreateMemo onAddMemo={onAddMemo} />)

    const input = screen.getByLabelText(/message/i)
    const button = screen.getByRole('button', { name: /add memo/i })

    await userEvent.clear(input)
    await userEvent.click(button)

    expect(alertSpy).toHaveBeenCalledTimes(1)
    expect(alertSpy).toHaveBeenCalledWith('Write message please')

    expect(onAddMemo).not.toHaveBeenCalled()

    alertSpy.mockRestore()
  })
})
