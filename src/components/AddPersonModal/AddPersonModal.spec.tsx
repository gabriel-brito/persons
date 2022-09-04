import { screen, render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import AddPersonModal from 'components/AddPersonModal'

const mock = {
  closeModal: jest.fn(),
  handleResponse: jest.fn(),
  showModal: true
}

describe('AddPersonModal', () => {
  it('should render correctly', () => {
    render(<AddPersonModal {...mock} />)

    expect(
      screen.getByRole('heading', { name: /add a new person/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/name */i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email */i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone */i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /submit-button/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /close-modal/i })
    ).toBeInTheDocument()
  })

  it('should have correct values', () => {
    render(<AddPersonModal {...mock} />)

    const name = screen.getByLabelText(/name */i)
    const email = screen.getByLabelText(/email */i)
    const phone = screen.getByLabelText(/phone */i)

    UserEvent.type(name, 'John Doe')
    UserEvent.type(email, 'johndoe@email.com')
    UserEvent.type(phone, '1112223333')

    expect(name).toHaveValue('John Doe')
    expect(email).toHaveValue('johndoe@email.com')
    expect(phone).toHaveValue('(111) 222-3333')
  })
})
