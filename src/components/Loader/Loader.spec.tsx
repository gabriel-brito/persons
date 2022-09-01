import { render } from '@testing-library/react'
import 'jest-styled-components'
import Loader from 'components/Loader'

describe('Loader', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader showLoader={true} />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        -webkit-animation: fDoRHh 2s linear infinite;
        animation: fDoRHh 2s linear infinite;
        border-radius: 50%;
        border: 5px solid white;
        border-bottom-color: #3498db;
        height: 60px;
        width: 60px;
      }

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
        <div
          class="c1"
        />
      </div>
    `)
  })
})
