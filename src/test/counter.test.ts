import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from '../store/counterStore'

describe('MyAlert Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increment', async () => {
    const counter = useCounterStore()

    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
    counter.decrement()
    expect(counter.count).toBe(0)
  })

  it('doubleCount', async () => {
    const counter = useCounterStore()
    expect(counter.doubleCount).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
    expect(counter.doubleCount).toBe(2)
  })
})