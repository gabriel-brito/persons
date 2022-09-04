import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Loader from 'components/Loader'

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader showLoader={true} />)

    expect(screen.getByTestId('loader')).toMatchInlineSnapshot(`
      .c0 {
        -webkit-animation: fDoRHh 2s linear infinite;
        animation: fDoRHh 2s linear infinite;
        border-radius: 50%;
        border: 5px solid white;
        border-bottom-color: transparent;
        height: 60px;
        width: 60px;
      }

      @media (max-width:600px) {

      }

      <div
        class="c0"
        data-testid="loader"
      />
    `)
  })
})
