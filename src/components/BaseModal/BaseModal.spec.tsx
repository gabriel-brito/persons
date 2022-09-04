import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import BaseModal from 'components/BaseModal'

describe('BaseModal', () => {
  it('should match snapshot', () => {
    render(
      <BaseModal
        showModal={true}
        closeModal={() => {}}
        title="Base modal title"
      >
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

    const handleModalVisibility = (value: boolean) => {
      showModal = value
    }

    const { rerender } = render(
      <BaseModal
        showModal={showModal}
        closeModal={handleModalVisibility}
        title="Base modal title"
      >
        <h1>Hello World</h1>
      </BaseModal>
    )

    expect(screen.getByTestId('base-modal')).toBeInTheDocument()

    UserEvent.click(screen.getByLabelText('close'))

    rerender(
      <BaseModal
        showModal={showModal}
        closeModal={handleModalVisibility}
        title="Base modal title"
      >
        <h1>Hello World</h1>
      </BaseModal>
    )

    expect(showModal).toStrictEqual(false)

    const baseModal = screen.queryByTestId('base-modal')

    expect(baseModal).toBeNull()
  })

  it('should have a footer inside the modal', () => {
    render(
      <BaseModal
        showModal={true}
        closeModal={() => {}}
        title="Base modal title"
        hasFooter
        footerContent={<button aria-label="test-button">Test Button</button>}
      >
        <h1>Hello World</h1>
      </BaseModal>
    )

    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /test-button/i })
    ).toBeInTheDocument()
  })
})
