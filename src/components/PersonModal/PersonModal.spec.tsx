import { screen, render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import PersonModal from 'components/PersonModal'

const mock = {
  selectedUser: {
    company: 'XPTO',
    email: 'xpto@gmail.com',
    name: 'XPTO Name',
    phone: [{ value: '555 666 777' }],
    picture:
      'https://i.pinimg.com/736x/e6/92/d5/e692d5b339965562babfe6b0b349d278.jpg'
  },
  closeModal: jest.fn(),
  showModal: true
}

describe('PersonModal', () => {
  it('should render correctly', () => {
    render(<PersonModal {...mock} />)

    expect(
      screen.getByRole('heading', { name: mock.selectedUser.name })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', {
        name: `${mock.selectedUser.name} Profile Picture`
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText(mock.selectedUser.phone[0].value)
    ).toBeInTheDocument()
    expect(screen.getByText(mock.selectedUser.company)).toBeInTheDocument()
    expect(screen.getByText(mock.selectedUser.email)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /close-modal/i })
    ).toBeInTheDocument()
  })

  it('should render call function when click on the button', () => {
    render(<PersonModal {...mock} />)

    const button = screen.getByRole('button', { name: /close-modal/i })

    UserEvent.click(button)

    expect(mock.closeModal).toHaveBeenCalledTimes(1)
  })
})
