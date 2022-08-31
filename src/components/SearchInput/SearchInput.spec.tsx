import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'

import SearchInput from 'components/SearchInput'

describe('Container', () => {
  it(`should have a heading with People's List text on it and have right styles`, () => {
    render(<SearchInput />)

    const heading = screen.getByRole('heading', { name: /people's list/i })

    expect(heading).toBeInTheDocument()
  })

  it(`should have the search input and it should match inline snapshot`, () => {
    render(<SearchInput />)

    expect(screen.getByLabelText('Search input')).toBeInTheDocument()
    expect(screen.getByLabelText('Search input')).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: JdDSp 0.2s linear;
        animation: JdDSp 0.2s linear;
        background-image: url('/assets/svg/search-icon.svg');
        background-position: 8px center;
        background-repeat: no-repeat;
        background-size: 20px;
        background-color: #eaeaea;
        border-radius: 16px;
        border: none;
        color: #656e7a;
        padding: 8px;
        padding-left: 40px;
        width: 193px;
      }

      .c0:focus {
        -webkit-animation: bQArbR 0.2s linear;
        animation: bQArbR 0.2s linear;
        background-position: -40px center;
        padding-left: 8px;
      }

      @media (max-width:600px) {

      }

      <input
        aria-label="Search input"
        class="c0"
        placeholder="Filter by name"
        type="text"
      />
    `)
  })

  it(`should change the background position and padding on click`, () => {
    render(<SearchInput />)
    const input = screen.getByLabelText('Search input')

    UserEvent.tab()

    expect(input).toHaveFocus()

    setTimeout(() => {
      expect(input).toHaveStyleRule('background-position', '-40px center')
      expect(input).toHaveStyleRule('padding', '8px')
    }, 50)
  })
})
