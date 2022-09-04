import { render, screen, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import Header from 'components/Header'

describe('Header', () => {
  it('should match snapshot', async () => {
    render(<Header />)

    let header

    await waitFor(() => (header = screen.getByTestId('header')))

    expect(header).toMatchInlineSnapshot(`
      .c1 {
        margin: 0 auto;
        max-width: 1280px;
        padding: 0 20px;
        width: 100%;
      }

      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: var(--mainColor);
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 20px 0;
      }

      .c2 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c3 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: transparent;
        border: 1px solid white;
        cursor: pointer;
        color: white;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-weight: 600;
        padding: 10px 16px;
        text-transform: uppercase;
        width: 150px;
      }

      .c3 > svg {
        font-size: 16px;
        margin-right: 8px;
      }

      <header
        class="c0"
        data-testid="header"
      >
        <div
          class="c1"
          data-testid="container"
        >
          <div
            class="c2"
          >
            <img
              alt="Pipedrive logo"
              class=""
              src="/assets/svg/logo.svg"
            />
            <button
              aria-label="add-new-person"
              class="c3"
            >
              <svg
                fill="currentColor"
                height="1em"
                stroke="currentColor"
                stroke-width="0"
                t="1551322312294"
                version="1.1"
                viewBox="0 0 1024 1024"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs />
                <path
                  d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"
                />
                <path
                  d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"
                />
              </svg>
               Add Person
            </button>
          </div>
        </div>
      </header>
    `)
  })

  it('should render the svg', () => {
    render(<Header />)

    expect(screen.getByAltText(/pipedrive logo/i)).toBeInTheDocument()
  })

  it('should render the add person button', () => {
    render(<Header />)

    expect(
      screen.getByRole('button', { name: 'add-new-person' })
    ).toBeInTheDocument()
  })
})
