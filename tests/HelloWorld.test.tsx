// Jest Test
import { h } from 'preact'
import { render } from '@testing-library/preact'

import HelloWorld from '../src/components/HelloWorld'

describe('Hello Jest', () => {
  test('Hello Preact', () => {
    const { container } = render(<HelloWorld />)
    expect(container.textContent).toEqual('Hello Preact!!!')
  })

  test('Hello Jest Snapshot', () => {
    const tree = render(<HelloWorld />)
    expect(tree).toMatchSnapshot()
  })
})
