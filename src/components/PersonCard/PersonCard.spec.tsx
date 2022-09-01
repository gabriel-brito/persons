import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import PersonCard from 'components/PersonCard'

const mock = {
  name: 'Michael Barton',
  company: 'PerkinElmer Inc',
  picture:
    'https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg',
  handler: () => console.log('here')
}

describe('Person Card', () => {
  it('should render correctly', () => {
    render(<PersonCard {...mock} />)

    expect(
      screen.getByRole('heading', { name: /Michael Barton/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /PerkinElmer Inc/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Michael Barton Profile Pic/i })
    ).toBeInTheDocument()
  })

  it('should call function when clicked', () => {
    const fn = jest.fn()

    render(<PersonCard {...mock} handler={fn} />)

    UserEvent.click(screen.getByTestId('person-card'))

    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should have a placeholder when contact doesnt have profile pic', () => {
    render(<PersonCard {...mock} picture="" />)
    const placeholder = screen.getByTestId('placeholder')

    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toHaveTextContent('M')
  })
})
