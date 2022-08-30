import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Header from 'components/Header'

describe('Header', () => {
  it('should match snapshot', () => {
    render(<Header />)

    expect(screen.getByTestId('header')).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #2a3647;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 20px 0;
      }

      .c1 {
        margin: 0 auto;
        max-width: 1280px;
        padding: 0 20px;
        width: 100%;
      }

      <header
        class="c0"
        data-testid="header"
      >
        <div
          class="c1"
          data-testid="container"
        >
          <img
            alt="Pipedrive logo"
            class=""
            src="/assets/svg/logo.svg"
          />
        </div>
      </header>
    `)
  })

  it('should render the svg', () => {
    render(<Header />)

    expect(screen.getByAltText(/pipedrive logo/i)).toBeInTheDocument()
  })
})
