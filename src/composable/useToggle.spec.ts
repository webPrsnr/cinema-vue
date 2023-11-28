import { describe, it, expect } from 'vitest'
import { useToggle } from './useToggle'

describe('test useToggle', () => {
  it('check initial flag', () => {
    const { currentState } = useToggle()
    expect(currentState()).toBeFalsy()
  })
  it('check toggle function', () => {
    const { currentState, toggle } = useToggle()
    expect(currentState()).toBeFalsy()
    toggle()
    expect(currentState()).toBeTruthy()
  })
})
