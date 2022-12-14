import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Wrapper = styled.form``

export const Row = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  padding: 5px 0;
  width: 100%;

  &:focus-visible {
    outline: none;
    border-bottom: 2px solid var(--mainColor);
  }
`

export const PhoneInput = styled(InputMask)`
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  padding: 5px 0;
  width: 100%;

  &:focus-visible {
    outline: none;
    border-bottom: 2px solid var(--mainColor);
  }
`

export const HelperText = styled.span`
  color: var(--red);
  font-size: 12px;
`

export const BaseButton = styled.button`
  background-color: white;
  border: 1px solid var(--borderColor);
  cursor: pointer;
  font-weight: 600;
  min-width: 85px;
  padding: 10px 16px;
`

export const SubmitButton = styled(BaseButton)`
  border: none;
  background-color: var(--green);
  color: white;
`
