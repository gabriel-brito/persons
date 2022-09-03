import * as S from 'components/Loader/styles'
import Backdrop from 'components/Backdrop'

type LoaderTypes = {
  showLoader: boolean
}

export default function Loader({ showLoader = false }: LoaderTypes) {
  return showLoader ? (
    <Backdrop>
      <S.Loader data-testid="loader" />
    </Backdrop>
  ) : null
}
