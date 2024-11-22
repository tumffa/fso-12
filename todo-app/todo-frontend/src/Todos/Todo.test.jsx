import { render, screen } from '@testing-library/react'
import Todo from './Todo'
import { test, expect } from 'vitest'

const mockDeleteTodo = vi.fn()
const mockCompleteTodo = vi.fn()

const todo = {
    _id: '1',
    text: 'Buy milk',
    done: false
    }

test ('renders todo', () => {
    render(<Todo todo={todo} deleteTodo={mockDeleteTodo} completeTodo={mockCompleteTodo} />)
    const element = screen.getByText('Buy milk')
    expect(element).toBeDefined()
})