// Jest Test
import { h } from 'preact'
import { render } from '@testing-library/preact'

import App from '../src/index'

test('Hello Jest', () => {
  const { container } = render(<App />)
  expect(container.textContent).toEqual('Hello Preact!!!')
})
