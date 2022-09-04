import { screen, render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'
import 'jest-styled-components'
import Pagination from 'components/Pagination'

const funcs = {
  handleNextPage: jest.fn(),
  handlePrevPage: jest.fn()
}

const firstPageMock = {
  currentPage: 1,
  hasNextPage: true,
  ...funcs
}

const middlePageMock = {
  currentPage: 2,
  hasNextPage: true,
  ...funcs
}

const lastPageMock = {
  currentPage: 3,
  hasNextPage: false,
  ...funcs
}

describe('Pagination', () => {
  it('should render correctly', () => {
    render(<Pagination {...middlePageMock} />)

    expect(
      screen.getByRole('button', { name: /prev-page/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /next-page/i })
    ).toBeInTheDocument()
    expect(screen.getByText('Page 2')).toBeInTheDocument()
  })

  it('should call funcs when clicked correctly', () => {
    render(<Pagination {...middlePageMock} />)

    const prevButton = screen.getByRole('button', { name: /prev-page/i })
    const nextButton = screen.getByRole('button', { name: /next-page/i })

    UserEvent.click(prevButton)
    UserEvent.click(nextButton)

    expect(middlePageMock.handlePrevPage).toHaveBeenCalledTimes(1)
    expect(middlePageMock.handleNextPage).toHaveBeenCalledTimes(1)
  })

  it('should not show prev button if its page 1', () => {
    render(<Pagination {...firstPageMock} />)

    const prevButton = screen.queryByLabelText(/prev-page/i)

    expect(prevButton).not.toBeInTheDocument()
    expect(screen.getByText('Page 1')).toBeInTheDocument()
  })

  it('should not show next button if its last page', () => {
    render(<Pagination {...lastPageMock} />)

    const nextButton = screen.queryByLabelText(/next-page/i)

    expect(nextButton).not.toBeInTheDocument()
    expect(screen.getByText('Page 3')).toBeInTheDocument()
  })
})
