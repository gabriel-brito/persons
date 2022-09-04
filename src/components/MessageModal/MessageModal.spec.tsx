import { screen, render } from '@testing-library/react'
import 'jest-styled-components'
import MessageModal from 'components/MessageModal'

const mock = {
  closeModal: jest.fn(),
  message: 'Success!',
  showModal: true,
  title: 'Message modal'
}

describe('MessageModal', () => {
  it('should render correctly', () => {
    render(<MessageModal {...mock} />)

    expect(
      screen.getByRole('heading', { name: mock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: mock.message })
    ).toBeInTheDocument()
  })

  it('should render with a different message and title', () => {
    render(<MessageModal {...mock} title="Hello world" message="xpto" />)

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /xpto/i })).toBeInTheDocument()
  })
})
