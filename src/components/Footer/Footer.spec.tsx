import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Footer from 'components/Footer'

describe('Footer', () => {
  it('should match snapshot', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer')).toMatchInlineSnapshot(`
      .c0 {
        background-color: var(--bgGrey);
        display: block;
        height: 72px;
        margin-top: 32px;
        width: 100%;
      }

      <footer
        class="c0"
        data-testid="footer"
      />
    `)
  })
})
