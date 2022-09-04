import { useState } from 'react'
import { useForm } from 'react-hook-form'
import EmailValidator from 'email-validator'

import BaseModal from 'components/BaseModal'
import Loader from 'components/Loader'

import * as S from 'components/AddPersonModal/styles'

import { AddPerson } from 'services/persons'

type AddPersonModalTypes = {
  showModal: boolean
  closeModal: () => void
  handleResponse: (success: boolean) => void
}

type FormValues = {
  name: string
  email: string
  phone: string
}

export default function AddPersonModal({
  showModal,
  handleResponse,
  closeModal
}: AddPersonModalTypes) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormValues>()
  const [showLoader, setShowLoader] = useState(false)

  const submitForm = handleSubmit(async (formData: FormValues) => {
    if (!EmailValidator.validate(formData.email)) {
      setError('email', {
        type: 'custom',
        message: 'Please, provide a valid e-mail'
      })

      return
    }

    setShowLoader(true)

    const body = {
      name: formData.name,
      email: [formData.email],
      phone: [formData.phone]
    }

    const response = await AddPerson(body)
    setShowLoader(false)

    handleResponse(response.success)
  })

  return (
    <BaseModal
      closeModal={closeModal}
      showModal={showModal}
      title="Add a new person"
      hasFooter
      footerContent={
        <>
          <S.SubmitButton aria-label="submit-button" onClick={submitForm}>
            Submit
          </S.SubmitButton>
          <S.BaseButton aria-label="close-modal" onClick={closeModal}>
            Back
          </S.BaseButton>
        </>
      }
    >
      <S.Wrapper>
        <S.Row>
          <S.Label htmlFor="name">Name *</S.Label>
          <S.Input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required.' })}
          />
          {errors?.name?.message && (
            <S.HelperText role="alert">{errors?.name?.message}</S.HelperText>
          )}
        </S.Row>

        <S.Row>
          <S.Label htmlFor="email">Email *</S.Label>
          <S.Input
            type="text"
            id="email"
            {...register('email', { required: 'Email is required.' })}
          />
          {errors?.email?.message && (
            <S.HelperText role="alert">{errors?.email?.message}</S.HelperText>
          )}
        </S.Row>

        <S.Row>
          <S.Label htmlFor="phone">Phone *</S.Label>
          <S.PhoneInput
            id="phone"
            mask="(999) 999-9999"
            {...register('phone', { required: 'Phone is required.' })}
          />
          {errors?.phone?.message && (
            <S.HelperText role="alert">{errors?.phone?.message}</S.HelperText>
          )}
        </S.Row>
      </S.Wrapper>

      <Loader showLoader={showLoader} />
    </BaseModal>
  )
}
