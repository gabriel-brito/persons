import {
  GrLinkNext as NextIcon,
  GrLinkPrevious as PrevIcon
} from 'react-icons/gr'
import * as S from 'components/Pagination/styles'

export type PaginationTypes = {
  currentPage: number
  handleNextPage: () => void
  handlePrevPage: () => void
  hasNextPage: boolean
}

export default function Pagination({
  currentPage,
  handleNextPage,
  handlePrevPage,
  hasNextPage
}: PaginationTypes) {
  return (
    <S.Wrapper>
      {currentPage === 1 ? (
        <S.InvisibleBrick data-testid="prev-brick" />
      ) : (
        <S.Button aria-label="prev-page" onClick={handlePrevPage}>
          <PrevIcon />
        </S.Button>
      )}

      <S.CurrentPage>Page {currentPage}</S.CurrentPage>

      {hasNextPage ? (
        <S.Button aria-label="next-page" onClick={handleNextPage}>
          <NextIcon />
        </S.Button>
      ) : (
        <S.InvisibleBrick data-testid="next-brick" />
      )}
    </S.Wrapper>
  )
}
