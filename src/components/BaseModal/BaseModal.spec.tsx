import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import BaseModal from 'components/BaseModal'

describe('BaseModal', () => {
  it('should match snapshot', () => {
    render(
      <BaseModal title="Base modal title">
        <h1>Hello World</h1>
      </BaseModal>
    )

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText('close')).toBeInTheDocument()

    expect(screen.getByTestId('base-modal')).toMatchSnapshot()
  })

  it('should close modal when function is triggered', () => {
    let showModal: boolean = true

    const handleModalVisibility = (value) => {
      showModal = value
    }

    const Modal = () =>
      showModal ? (
        <BaseModal closeModal={handleModalVisibility} title="Base modal title">
          <h1>Hello World</h1>
        </BaseModal>
      ) : null

    const { rerender } = render(<Modal />)

    expect(screen.getByTestId('base-modal')).toBeInTheDocument()

    UserEvent.click(screen.getByLabelText('close'))

    rerender(<Modal />)

    expect(showModal).toStrictEqual(false)

    const baseModal = screen.queryByTestId('base-modal')

    expect(baseModal).toBeNull()
  })
})
