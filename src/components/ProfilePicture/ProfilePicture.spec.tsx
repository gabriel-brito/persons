import { screen, render } from '@testing-library/react'
import 'jest-styled-components'
import ProfilePicture from 'components/ProfilePicture'

const mock = {
  name: 'Michael Barton',
  company: 'PerkinElmer Inc',
  picture:
    'https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg'
}

describe('ProfilePicture', () => {
  it('should render correctly', () => {
    render(<ProfilePicture {...mock} />)

    expect(
      screen.getByAltText(/Michael Barton profile picture/i)
    ).toBeInTheDocument()

    expect(screen.getByTestId('profile-wrapper')).toMatchInlineSnapshot(`
      .c0 {
        border-radius: 50%;
        height: 60px;
        overflow: hidden;
        width: 60px;
      }

      .c1 {
        display: block;
        height: 100%;
        width: 100%;
      }

      <div
        class="c0"
        data-testid="profile-wrapper"
        size="60"
      >
        <img
          alt="Michael Barton Profile Picture"
          class="c1"
          src="https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg"
        />
      </div>
    `)
  })

  it('should render placeholder correctly', () => {
    render(<ProfilePicture {...mock} picture={''} />)

    expect(screen.getByTestId('placeholder')).toBeInTheDocument()
  })

  it('should render placeholder correctly with different size', () => {
    render(<ProfilePicture {...mock} size={160} picture={''} />)

    expect(screen.getByTestId('placeholder')).toHaveStyleRule('height', '160px')
    expect(screen.getByTestId('placeholder')).toHaveStyleRule('width', '160px')
  })
})
