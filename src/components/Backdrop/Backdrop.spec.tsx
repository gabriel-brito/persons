import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Backdrop from 'components/Backdrop'

const MockTitle = () => <h1>Hello world</h1>

describe('Backdrop', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Backdrop>
        <MockTitle />
      </Backdrop>
    )

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: rgba(0,0,0,0.5);
        bottom: 0;
        color: white;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1201;
      }

      <div
        class="c0"
      >
        <h1>
          Hello world
        </h1>
      </div>
    `)
  })
})
